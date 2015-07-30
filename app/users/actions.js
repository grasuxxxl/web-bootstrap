/**
 * Created by maximilian on 08.06.2015.
 */
import { LOAD_USERS } from './action_types.js';

export default {
    load() {
        return { type: LOAD_USERS }
    }
}

export function load() {
    return { type: LOAD_USERS }
}