interface User {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    accent_color: number | null;
    global_name: string | null;
    avatar_decoration_data: null;
    banner_color: null;
    clan: null;
    primary_guild: null;
}

interface RecurrenceRule {
    start: string;
    end: string | null;
    frequency: number;
    interval: number;
    by_weekday: null;
    by_n_weekday: { n: number; day: number }[] | null;
    by_month: null;
    by_month_day: null;
    by_year_day: null;
    count: null;
}

interface GuildScheduledEventException {
    event_id: string;
    event_exception_id: string;
    scheduled_start_time: string;
    scheduled_end_time: string | null;
    is_canceled: boolean;
}

interface EntityMetadata {
    location: string;
}

interface GuildScheduledEvent {
    id: string;
    guild_id: string;
    name: string;
    description: string;
    channel_id: string | null;
    creator_id: string;
    creator: User;
    image: null;
    scheduled_start_time: string;
    scheduled_end_time: string;
    status: number;
    entity_type: number;
    entity_id: null;
    recurrence_rule: RecurrenceRule | null;
    privacy_level: number;
    sku_ids: [];
    guild_scheduled_event_exceptions: GuildScheduledEventException[];
    entity_metadata: EntityMetadata;
}

// Type for an array of GuildScheduledEvents
type GuildScheduledEvents = GuildScheduledEvent[];

interface ErrorItem {
    code: string;
    message: string;
}

interface PlatformErrors {
    _errors: ErrorItem[];
}

interface ActivityErrors {
    platform: PlatformErrors;
    type: PlatformErrors;
}

interface Errors {
    activities: Record<string, ActivityErrors>; // Use Record for dynamic keys
}

interface ErrorResponse {
    code: number;
    errors: Errors;
    message: string;
}

export type {
    User,
    RecurrenceRule,
    EntityMetadata,
    GuildScheduledEvent,
    GuildScheduledEvents,
    ErrorItem,
    PlatformErrors,
    ActivityErrors,
    Errors,
    ErrorResponse,
};
