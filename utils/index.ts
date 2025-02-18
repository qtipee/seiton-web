import type { Timestamp } from 'firebase/firestore';
import type { Sound } from '~/enums/sound';

/**
 * Convert the given Firestore Timestamp to the locale
 * date. It can also includes the time if set to true.
 * @param {Timestamp} timestamp 
 * @param {boolean} includeTime 
 * @returns {String}
 */
export const formatTimestamp = (timestamp: Timestamp, includeTime: boolean = false) => {
    const date = timestamp.toDate();
    const formattedDate = date.toLocaleDateString();

    if (includeTime) {
        const formattedTime  = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} ${formattedTime}`;
    }

    return formattedDate;
};

/**
 * Convert this given to the'fr-FR' format (DD/MM/YYYY).
 * @param {Date} date 
 * @returns {string}
 */
export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('fr-FR').format(date);
};

/**
 * Play the given sound.
 * @param {Sound} sound name of the sound file
 */
export const playSound = (sound: Sound): void => {
    try {
        const audio = new Audio(`/sounds/${sound}`);
        audio.play();
    } catch (error) {
        console.error(`Error playing sound:`, error);
    }
};
