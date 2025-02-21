import { ErrorResponse, GuildScheduledEvents } from './types';

const checkAPIOutput = (data: object): GuildScheduledEvents => {
    if (Array.isArray(data)) {
        return data as GuildScheduledEvents;
    } else if (!Object.hasOwn(data, 'code')) {
        const error = data as ErrorResponse;
        throw new Error(`Error code ${error.code}: ${error.message}`);
    } else {
        throw new Error('Unknown type encountered!');
    }
};

const getEvents = (guildId: string): Promise<GuildScheduledEvents> => {
    const token: string | undefined = process.env.DISCORD_TOKEN;

    const options: RequestInit = {};
    options.method = 'GET';
    options.headers = {
        Authorization: `Bot ${token}`,
    };

    return fetch(`https://discord.com/api/v10/guilds/${guildId}/scheduled-events`, options)
        .then((response) => response.json())
        .then((data) => checkAPIOutput(data));
};

export { getEvents };
