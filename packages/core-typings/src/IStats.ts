import type { CpuInfo } from 'os';

import type { DeviceSessionAggregationResult, OSSessionAggregationResult, UserSessionAggregationResult } from './ISession';
import type { ISettingStatisticsObject } from './ISetting';
import type { ITeamStats } from './ITeam';
import type { MACStats } from './omnichannel';

export interface IStats {
	_id: string;
	wizard: {
		organizationType?: string;
		industry?: string;
		size?: string;
		country?: string;
		language?: string;
		serverType?: string;
		registerServer?: boolean;
	};
	uniqueId: string;
	deploymentFingerprintHash: string;
	deploymentFingerprintVerified: boolean;
	installedAt?: string;
	version?: string;
	tag?: string;
	branch?: string;
	totalUsers: number;
	activeUsers: number;
	activeGuests: number;
	nonActiveUsers: number;
	appUsers: number;
	onlineUsers: number;
	awayUsers: number;
	busyUsers: number;
	totalConnectedUsers: number;
	offlineUsers: number;
	userLanguages: Record<string, number>;
	totalRooms: number;
	totalChannels: number;
	totalPrivateGroups: number;
	totalDirect: number;
	totalLivechat: number;
	totalDiscussions: number;
	totalThreads: number;
	teams: ITeamStats;
	totalLivechatVisitors: number;
	totalLivechatAgents: number;
	totalLivechatManagers: number;
	totalCustomFields: number;
	livechatEnabled: boolean;
	isDepartmentRemovalEnabled: boolean;
	totalChannelMessages: number;
	totalPrivateGroupMessages: number;
	totalDirectMessages: number;
	totalLivechatMessages: number;
	totalTriggers: number;
	totalMessages: number;
	federatedServers: number;
	federatedUsers: number;
	lastLogin: string;
	lastMessageSentAt: Date | undefined;
	lastSeenSubscription: string;
	os: {
		type: string;
		platform: NodeJS.Platform;
		arch: string;
		release: string;
		uptime: number;
		loadavg: number[];
		totalmem: number;
		freemem: number;
		cpus: CpuInfo[];
	};
	process: {
		nodeVersion: string;
		pid: number;
		uptime: number;
	};
	deploy: {
		method: string;
		platform: string;
	};
	enterpriseReady: boolean;
	uploadsTotal: number;
	uploadsTotalSize: number;
	migration: {
		_id?: string;
		locked: boolean;
		version: number;
		buildAt?: string | Date;
		lockedAt?: string | Date;
	};
	instanceCount: number;
	oplogEnabled: boolean;
	msEnabled: boolean;
	mongoVersion: string;
	mongoStorageEngine: string;
	pushQueue: number;
	omnichannelSources: { [key: string]: number | string }[];
	omnichannelContactsBySource: MACStats;
	uniqueContactsOfLastMonth: MACStats;
	uniqueContactsOfLastWeek: MACStats;
	uniqueContactsOfYesterday: MACStats;
	departments: number;
	archivedDepartments: number;
	routingAlgorithm: string;
	onHoldEnabled: boolean;
	emailInboxes: number;
	BusinessHours: { [key: string]: number | string };
	lastChattedAgentPreferred: boolean;
	assignNewConversationsToContactManager: boolean;
	visitorAbandonment: string;
	chatsOnHold: number;
	voipEnabled: boolean;
	voipCalls: number;
	voipExtensions: number;
	voipSuccessfulCalls: number;
	voipErrorCalls: number;
	voipOnHoldCalls: number;
	federationOverviewData: {
		numberOfEvents: number;
		numberOfFederatedUsers: number;
		numberOfServers: number;
	};
	readReceiptsEnabled: boolean;
	readReceiptsDetailed: boolean;
	uniqueUsersOfLastWeek: UserSessionAggregationResult;
	uniqueUsersOfLastMonth: UserSessionAggregationResult;
	uniqueUsersOfYesterday: UserSessionAggregationResult;
	uniqueDevicesOfYesterday: DeviceSessionAggregationResult;
	uniqueDevicesOfLastWeek: DeviceSessionAggregationResult;
	uniqueDevicesOfLastMonth: DeviceSessionAggregationResult;
	uniqueOSOfYesterday: OSSessionAggregationResult;
	uniqueOSOfLastWeek: OSSessionAggregationResult;
	uniqueOSOfLastMonth: OSSessionAggregationResult;
	apps: {
		engineVersion: string;
		totalInstalled: number | false;
		totalActive: number | false;
		totalFailed: number | false;
	};
	services: Record<string, unknown>;
	importer: Record<string, unknown>;
	settings: ISettingStatisticsObject;
	integrations: {
		totalIntegrations: number;
		totalIncoming: number;
		totalIncomingActive: number;
		totalOutgoing: number;
		totalOutgoingActive: number;
		totalWithScriptEnabled: number;
	};
	enterprise: {
		modules: string[];
		tags: string[];
		seatRequests: number;
		livechatTags?: number;
		cannedResponses?: number;
		priorities?: number;
		slas?: number;
		businessUnits?: number;
	};
	createdAt: Date | string;
	totalOTR: number;
	totalOTRRooms: number;
	slashCommandsJitsi: number;
	messageAuditApply: number;
	messageAuditLoad: number;
	dashboardCount: number;
	joinJitsiButton: number;
	totalBroadcastRooms: number;
	totalRoomsWithActiveLivestream: number;
	totalTriggeredEmails: number;
	totalRoomsWithStarred: number;
	totalRoomsWithPinned: number;
	totalUserEmail2fa: number;
	totalUserTOTP: number;
	totalStarred: number;
	totalPinned: number;
	totalLinkInvitation: number;
	totalEmailInvitation: number;
	totalE2ERooms: number;
	logoChange: boolean;
	homeTitleChanged: boolean;
	homeBodyChanged: boolean;
	customCSSChanged: boolean;
	onLogoutCustomScriptChanged: boolean;
	loggedOutCustomScriptChanged: boolean;
	loggedInCustomScriptChanged: boolean;
	roomsInsideTeams: number;
	showHomeButton: boolean;
	totalEncryptedMessages: number;
	totalLinkInvitationUses: number;
	totalManuallyAddedUsers: number;
	videoConf: {
		videoConference: {
			started: number;
			ended: number;
		};
		direct: {
			calling: number;
			started: number;
			ended: number;
		};
		livechat: {
			started: number;
			ended: number;
		};
		settings: {
			provider: string;
			dms: boolean;
			channels: boolean;
			groups: boolean;
			teams: boolean;
		};
	};
	totalSubscriptionRoles: number;
	totalUserRoles: number;
	totalCustomRoles: number;
	totalWebRTCCalls: number;
	uncaughtExceptionsCount: number;
	push: number;
	matrixFederation: {
		enabled: boolean;
	};
	webRTCEnabled: boolean;
	webRTCEnabledForOmnichannel: boolean;
	omnichannelWebRTCCalls: number;
}
