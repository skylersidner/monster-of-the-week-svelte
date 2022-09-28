

    import { faTableColumns, faCircleQuestion, faSkull, faGhost, faLocationDot, faPersonWalking } from '@fortawesome/free-solid-svg-icons'

const PAGE_NAMES = Object.freeze({
    DASHBOARD: {
        name: 'Dashboard',
        value: 'DASHBOARD',
        route: 'dashboard',
        faIcon: faTableColumns,
    },
    MYSTERIES: {
        name: 'Mysteries',
        value: 'MYSTERIES',
        route: 'mysteries',
        faIcon: faCircleQuestion,
    },
    MONSTERS: {
        name: 'Monsters',
        value: 'MONSTERS',
        route: 'monsters',
        faIcon: faSkull,
    },
    MINIONS: {
        name: 'Minions',
        value: 'MINIONS',
        route: 'minions',
        faIcon: faGhost,
    },
    LOCATIONS: {
        name: 'Locations',
        value: 'LOCATIONS',
        route: 'locations',
        faIcon: faLocationDot,
    },
    BYSTANDERS: {
        name: 'Bystanders',
        value: 'BYSTANDERS',
        route: 'bystanders',
        faIcon: faPersonWalking,
    },
});

export default PAGE_NAMES;