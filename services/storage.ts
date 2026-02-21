
import { VideoLink } from '../types';
import { INITIAL_VIDEOS, ADMIN_UUID } from '../constants';

const STORAGE_KEY = 'bili_navi_data_v1';
const API_URL = '/api/data';

// Helper to check if we are in a browser environment that can make relative requests
const isBrowser = typeof window !== 'undefined';

/**
 * Fetch videos from Cloud KV or LocalStorage (Fallback)
 */
export const fetchVideos = async (): Promise<VideoLink[]> => {
  try {
    if (isBrowser) {
      // Try fetching from the Serverless Function
      const res = await fetch(API_URL);
      
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data)) {
            // Also update local storage cache for offline/faster subsequent loads if needed
            // localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return data;
        }
      }
    }
  } catch (e) {
    // Ignore network errors, fall back to local
    console.warn('API fetch failed, falling back to local storage:', e);
  }

  // FALLBACK: Local Storage
  return getLocalVideos();
};

/**
 * Save videos to Cloud KV and LocalStorage
 */
export const saveVideosRemote = async (videos: VideoLink[]): Promise<boolean> => {
  // Always save locally first for immediate UI feedback capability (optimistic UI)
  saveLocalVideos(videos);

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ADMIN_UUID}` // Using the UUID as the API Key
      },
      body: JSON.stringify(videos)
    });

    if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
    }
    return true;
  } catch (e) {
    console.error('Failed to sync with server:', e);
    alert('Warning: Could not save to Cloud Server. Data saved locally only. Check your network or Admin Secret configuration.');
    return false;
  }
}

// --- Local Storage Helpers (Synchronous Fallbacks) ---

export const getLocalVideos = (): VideoLink[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to parse videos from local storage', e);
  }
  return INITIAL_VIDEOS;
};

const saveLocalVideos = (videos: VideoLink[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  } catch (e) {
    console.error('Failed to save to local storage', e);
  }
};

export const resetToDefaults = (): VideoLink[] => {
    localStorage.removeItem(STORAGE_KEY);
    // Note: We don't delete from Cloud automatically on reset to prevent accidents, 
    // unless the user explicitly saves the reset state.
    return INITIAL_VIDEOS;
}

export const exportData = (videos: VideoLink[]): string => {
  return JSON.stringify(videos, null, 2);
};
