import { getEvents } from '../services/discord-api';
import styles from './page.module.css';

const Page = async () => {
    const events = await getEvents('609449315882106924');

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
