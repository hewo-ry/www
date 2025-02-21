import { GuildScheduledEvents } from '../types/discord';

const checkAPIOutput = (data: any): GuildScheduledEvents => {
    if (Array.isArray(data)) {
        return data as GuildScheduledEvents;
    } else if (!Object.hasOwn(data, 'code')) {
        throw new Error(`Error code ${data.code}: ${data.message}`);
    } else {
        throw new Error('Unknown type encountered!');
    }
};

const getEvents = (guildId: string): Promise<GuildScheduledEvents> => {
    const token: string = process.env.DISCORD_TOKEN;

    let options: RequestInit = {};
    options.method = 'GET';
    options.headers = {
        Authorization: `Bot ${token}`,
    };

    return fetch(`https://discord.com/api/v10/guilds/${guildId}/scheduled-events`, options)
        .then((response) => response.json())
        .then((data) => checkAPIOutput(data));
};

export { getEvents };
