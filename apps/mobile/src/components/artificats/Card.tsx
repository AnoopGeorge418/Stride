import { CardProps, TaskItem } from '@/types/cardType';
import { StyleSheet, Text, View } from 'react-native';

const FONT = {
	serif: 'Lora',
	mono: 'GeistMono-Regular',
	monoBold: 'GeistMono-Bold',
} as const;

const STATUS = { success: '#10b981', progress: '#3b82f6' } as const;

/* ---------- Atoms ---------- */

type TagProps = {
	label: string;
	color: string;
	background: string;
	radius?: number;
};

const Tag = ({ label, color, background, radius = 4 }: TagProps) => (
	<View
		style={[
			styles.tag,
			{ backgroundColor: background, borderRadius: radius },
		]}>
		<Text style={[styles.tagText, { color }]}>{label}</Text>
	</View>
);

type CheckboxProps = { checked?: boolean; inProgress?: boolean; size?: number };

const Checkbox = ({
	checked = false,
	inProgress = false,
	size = 14,
}: CheckboxProps) => {
	if (inProgress) {
		return (
			<View
				style={[
					styles.checkbox,
					{
						width: size,
						height: size,
						borderRadius: size / 2,
						borderColor: STATUS.progress,
					},
				]}>
				<View
					style={[
						styles.innerDot,
						{ backgroundColor: STATUS.progress },
					]}
				/>
			</View>
		);
	}

	return (
		<View
			style={[
				styles.checkbox,
				{
					width: size,
					height: size,
					backgroundColor: checked ? STATUS.success : 'transparent',
					borderColor: checked ? STATUS.success : '#ccc',
				},
			]}>
			{checked && <Text style={styles.checkMark}>✓</Text>}
		</View>
	);
};

const renderIcon = (icon: CardProps['icon']) =>
	typeof icon === 'string' ? (
		<Text style={styles.icon}>{icon}</Text>
	) : (
		(icon ?? null)
	);

type RitualRowProps = { task: TaskItem; textColor: string };

const RitualRow = ({ task, textColor }: RitualRowProps) => {
	const clamped = Math.min(Math.max(task.progress ?? 0, 0), 1);

	return (
		<View style={styles.ritualRow}>
			<View style={styles.ritualMain}>
				<View style={styles.ritualLeft}>
					<Checkbox
						checked={task.completed}
						inProgress={task.inProgress}
					/>
					<Text
						style={[styles.ritualText, { color: textColor }]}
						numberOfLines={1}>
						{task.text}
					</Text>
				</View>

				<View style={styles.row}>
					{!task.completed && !!task.progressText && (
						<Text style={styles.meta}>{task.progressText}</Text>
					)}
					{task.completed && (
						<Tag
							label="COMPLETE"
							color={STATUS.success}
							background="rgba(16,185,129,0.1)"
						/>
					)}
					{task.inProgress && (
						<Tag
							label="IN PROGRESS"
							color={STATUS.progress}
							background="rgba(59,130,246,0.1)"
						/>
					)}
				</View>
			</View>

			{task.inProgress && task.progress !== undefined && (
				<View style={styles.progressTrack}>
					<View
						style={[
							styles.progressFill,
							{ width: `${clamped * 100}%` },
						]}
					/>
				</View>
			)}
		</View>
	);
};

/* ---------- Card ---------- */

export const Card = ({
	content,
	icon,
	title,
	tag,
	cardBackgroundColor,
	tagBackgroundColor = 'rgba(0,0,0,0.1)',
	tagColor = '#000000',
	titleColor = '#000000',
	contentColor = '#333333',
	variant = 'default',
	tasks,
	style,
}: CardProps) => {
	// Flow Score: ring + label/value + tag
	if (variant === 'flow-score') {
		const score = Number(content);
		const ringValue = Number.isFinite(score) ? Math.floor(score) : '–';

		return (
			<View
				style={[
					styles.pill,
					{ backgroundColor: cardBackgroundColor },
					style,
				]}>
				<View style={[styles.ring, { borderColor: contentColor }]}>
					<Text style={[styles.ringText, { color: contentColor }]}>
						{ringValue}
					</Text>
				</View>

				<View style={styles.textCol}>
					<Text style={[styles.label, { color: titleColor }]}>
						{title}
					</Text>
					<View style={styles.row}>
						<Text style={[styles.value, { color: contentColor }]}>
							{content}
						</Text>
						{!!tag && (
							<Tag
								label={tag}
								color={tagColor}
								background={tagBackgroundColor}
							/>
						)}
					</View>
				</View>
			</View>
		);
	}

	// AI Task Copilot
	if (variant === 'task-copilot') {
		return (
			<View
				style={[
					styles.shell,
					styles.copilot,
					{ backgroundColor: cardBackgroundColor },
					style,
				]}>
				<View style={styles.header}>
					<View style={styles.row}>
						{renderIcon(icon)}
						<Text style={[styles.title, { color: titleColor }]}>
							{title}
						</Text>
					</View>
					{!!tag && (
						<Tag
							label={tag}
							color={tagColor}
							background={tagBackgroundColor}
						/>
					)}
				</View>

				{!!content && (
					<View style={styles.row}>
						<Checkbox />
						<Text
							style={[
								styles.copilotContent,
								{ color: contentColor },
							]}>
							{content}
						</Text>
					</View>
				)}

				{tasks?.map((task) =>
					task.subItems?.length ? (
						<View key={task.id} style={styles.subList}>
							{task.subItems.map((sub, idx) => (
								<Text
									key={`${task.id}-${idx}`}
									style={[
										styles.subItem,
										{ color: contentColor },
									]}>
									• {sub}
								</Text>
							))}
						</View>
					) : null,
				)}
			</View>
		);
	}

	// Daily Rituals
	if (variant === 'daily-rituals') {
		return (
			<View
				style={[
					styles.shell,
					styles.rituals,
					{ backgroundColor: cardBackgroundColor },
					style,
				]}>
				<View style={styles.header}>
					<View style={styles.row}>
						<View
							style={[
								styles.dot,
								{ backgroundColor: titleColor },
							]}
						/>
						<Text style={[styles.title, { color: titleColor }]}>
							{title}
						</Text>
					</View>
					{!!tag && (
						<Tag
							label={tag}
							color={tagColor}
							background={tagBackgroundColor}
							radius={12}
						/>
					)}
				</View>

				<View style={styles.ritualList}>
					{tasks?.map((task) => (
						<RitualRow
							key={task.id}
							task={task}
							textColor={contentColor}
						/>
					))}
				</View>
			</View>
		);
	}

	// Default / compact pill
	return (
		<View
			style={[
				styles.pill,
				{ backgroundColor: cardBackgroundColor },
				style,
			]}>
			{renderIcon(icon)}

			{(!!title || !!content) && (
				<View style={styles.textCol}>
					{!!title && (
						<Text style={[styles.label, { color: titleColor }]}>
							{title}
						</Text>
					)}
					{!!content && (
						<Text style={[styles.value, { color: contentColor }]}>
							{content}
						</Text>
					)}
				</View>
			)}

			{!!tag && (
				<Tag
					label={tag}
					color={tagColor}
					background={tagBackgroundColor}
				/>
			)}
		</View>
	);
};

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
	row: { flexDirection: 'row', alignItems: 'center', gap: 6 },

	// Shared shell for the big cards
	shell: {
		padding: 16,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.06)',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.1,
		shadowRadius: 16,
		elevation: 6,
	},
	copilot: {
		width: '90%',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.08,
		shadowRadius: 12,
		elevation: 4,
	},
	rituals: { width: '95%' },

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 8,
		marginBottom: 12,
	},

	title: {
		fontFamily: FONT.monoBold,
		fontSize: 11,
		letterSpacing: 1,
		flexShrink: 1,
	},

	copilotContent: { fontFamily: FONT.serif, fontSize: 18, flexShrink: 1 },

	subList: {
		marginTop: 10,
		padding: 10,
		borderRadius: 8,
		gap: 6,
		backgroundColor: 'rgba(0,0,0,0.03)',
	},
	subItem: { fontFamily: FONT.mono, fontSize: 12, opacity: 0.7 },

	dot: { width: 6, height: 6, borderRadius: 3 },

	ritualList: { gap: 12 },
	ritualRow: { gap: 6 },
	ritualMain: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 8,
	},
	ritualLeft: {
		flex: 1,
		minWidth: 0,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	ritualText: { fontFamily: FONT.serif, fontSize: 15, flex: 1 },
	progressTrack: {
		marginLeft: 22,
		height: 4,
		borderRadius: 2,
		backgroundColor: 'rgba(0,0,0,0.06)',
		overflow: 'hidden',
	},
	progressFill: {
		height: '100%',
		borderRadius: 2,
		backgroundColor: STATUS.progress,
	},

	// Compact pill / flow score
	pill: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,0.06)',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.06,
		shadowRadius: 8,
		elevation: 2,
	},
	textCol: { gap: 2 },
	label: { fontFamily: FONT.monoBold, fontSize: 9, letterSpacing: 1 },
	value: { fontFamily: FONT.monoBold, fontSize: 13 },
	ring: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ringText: { fontFamily: FONT.monoBold, fontSize: 11 },

	icon: { fontSize: 14 },

	// Shared atoms
	tag: { paddingHorizontal: 6, paddingVertical: 2 },
	tagText: { fontFamily: FONT.monoBold, fontSize: 9, letterSpacing: 0.5 },
	checkbox: {
		borderWidth: 1.5,
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkMark: { color: '#fff', fontSize: 10, fontWeight: '700' },
	innerDot: { width: 5, height: 5, borderRadius: 3 },
	meta: { fontFamily: FONT.mono, fontSize: 10, color: '#888' },
});
