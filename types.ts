export enum CategoryType {
  ANIMATION = 'Animation',
  RADIO = 'Radio',
  MUSIC = 'Music',
  CONCERT = 'Concert',
  ACTIVITY = 'Activity',
  STAGE = 'Stage'
}

export interface VideoLink {
  id: string;
  title: string;
  url: string;
  coverUrl?: string; // Optional custom cover
  category: CategoryType;
  subCategory?: string; // e.g. '全熟', '切片', 'PV', etc.
  dateAdded: number; // Timestamp
}

export interface CategoryMeta {
  type: CategoryType;
  label: string;
  description: string;
}

export const CATEGORY_METADATA: Record<CategoryType, CategoryMeta> = {
  [CategoryType.ANIMATION]: { type: CategoryType.ANIMATION, label: '番剧动画', description: 'TV动画、剧场版、官方宣传与联动' },
  [CategoryType.MUSIC]: { type: CategoryType.MUSIC, label: '音乐/MV', description: 'MV、音乐、演奏与翻唱' },
  [CategoryType.CONCERT]: { type: CategoryType.CONCERT, label: 'LIVE现场', description: '演唱会与其他现场' },
  [CategoryType.RADIO]: { type: CategoryType.RADIO, label: '孤独广播', description: '三冠王！' },
  [CategoryType.STAGE]: { type: CategoryType.STAGE, label: '舞台剧', description: '舞台剧相关' },
  [CategoryType.ACTIVITY]: { type: CategoryType.ACTIVITY, label: '生放送/活动', description: '直播、线下活动与特别节目' },
};

// Preset sub-categories for the UI suggestions and consistent tagging
export const DEFAULT_SUB_CATEGORIES: Record<CategoryType, string[]> = {
    [CategoryType.ANIMATION]: ['正片', 'PV', '剧场版', '动画宣传','联动广告'],
    [CategoryType.RADIO]: ['全熟', '切片'],
    [CategoryType.MUSIC]: ['MV', 'music','The first take',  '翻唱与演奏'],
    [CategoryType.CONCERT]: ['整场', '片段','单曲', '花絮'],
    [CategoryType.ACTIVITY]: ['直播', '线下活动', '访谈', '切片', '吉他英雄之路', '节目', '其他官方消息'],
    [CategoryType.STAGE]: ['正片', '花絮', '宣传视频', '其他']
};
