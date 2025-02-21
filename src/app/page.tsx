import { getEnv } from '@/lib/env';
import { getEvents } from '@/lib/services/discord/api';

import styles from './page.module.css';

const Page = async () => {
    const guildId = getEnv('DISCORD_GUILD_ID');
    const events = await getEvents(guildId);

    return (
        <div className={styles.page}>
            <h1>Hello world</h1>
            {events.map((event) => (
                <div key={`event-${event.id}`}>
                    <p>{event.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Page;
