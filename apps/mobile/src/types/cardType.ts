export type CardVariant =
	| 'default'
	| 'compact'
	| 'featured'
	| 'task-copilot'
	| 'daily-rituals'
	| 'flow-score';

export type TaskItem = {
	id: string;
	text: string;
	completed?: boolean;
	inProgress?: boolean;
	progressText?: string;
	progress?: number; // 0–1, drives the in-progress bar
	subItems?: string[];
};

export type CardProps = {
	content?: string;
	icon?: React.ReactNode | string;
	title?: string;
	tag?: string;
	cardBackgroundColor: string;
	tagBackgroundColor?: string;
	tagColor?: string;
	titleColor?: string;
	contentColor?: string;
	variant?: CardVariant;
	tasks?: TaskItem[];
	style?: any;
};
