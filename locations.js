const communityLocations = [
    {
        lat: 38.9893,
        lng: -76.9819,
        type: 'recreation',
        name: 'Langley Park Community Center',
        address: '1500 Merrimac Drive Hyattsville, MD',
        phone: '(301) 445-4508',
        email: 'langleyparkcc@pgparks.com',
        hours: [
            { days: 'Mon-Thu', time: '9am-9pm' },
            { days: 'Fri', time: '9am-7pm' },
            { days: 'Fri (Teens)', time: '7pm-10pm' },
            { days: 'Sat', time: '10am-4pm' },
            { days: 'Sun', time: '12pm-4pm' }
        ]
    },
    {
        lat: 38.993160,
        lng: -76.981980,
        type: 'education',
        name: 'Langley Park McCormick Elementary School',
        address: '8201 15th Ave, Adelphi, MD 20783',
        phone: '(301) 445-8423',
        hours: [
            { days: 'Mon-Fri', time: '7:30am-1:40pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 39.000336,
        lng: -76.994097,
        type: 'religious',
        name: 'Clifton Park Baptist Church',
        address: '8818 Piney Branch Road Clifton Park Village, MD 20903',
        phone: '301-434-2456',
        website: 'https://www.cliftonparkbaptistchurch.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: '24 hours' }
        ]
    },
    {
        lat: 38.979075,
        lng: -76.980896,
        type: 'religious',
        name: 'SHARE Ministry Outreach',
        address: '7201 16th Place Hyattsville, MD 20783',
        phone: '240-417-6012',
        website: 'https://www.findhelp.org/turner-memorial-ame-church--hyattsville-md--share-ministry-outreach/5021232198320128?postal=20784',
        hours: [
            { days: 'Mon-Fri', time: '8am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.997814,
        lng: -77.000953,
        type: 'health',
        name: 'Community CHEER',
        address: '8545 Piney Branch Road, Suite H, Silver Spring, MD 20901',
        phone: '301-589-3633',
        website: 'https://www.communitycheer.org/',
        hours: [
            { days: 'Mon', time: '9am-12pm' },
            { days: 'Tue', time: 'Closed' },
            { days: 'Wed', time: '9am-12pm' },
            { days: 'Thu-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.999533,
        lng: -76.982263,
        type: 'religious',
        name: 'St. Michael and All Angles',
        address: '8501 New Hampshire Ave, Adelphi, MD 20783',
        phone: '240-882-0274',
        website: 'https://www.stmichaelsadelphi.org/',
        hours: [
            { days: 'N/A', time: 'Hours not available' }
        ]
    },
    {
        lat: 38.976908,
        lng: -76.991900,
        type: 'religious',
        name: 'Grace United Methodist Church',
        address: '7001 New Hampshire Ave Takoma Park, MD 20912',
        phone: '240-450-2092',
        website: 'https://www.umc.org/en/find-a-church/church/001Um00000PFKblIAH',
        hours: [
            { days: 'N/A', time: 'Hours not available' }
        ]
    },
    {
        lat: 38.988742,
        lng: -76.992464,
        type: 'health',
        name: 'Community Clinic, Inc. - CCI Greenbelt Health Center',
        address: '7676 New Hampshire Ave Suite 220, Takoma Park, MD 20912',
        phone: '301-431-2972',
        website: 'https://www.cciweb.org/',
        hours: [
            { days: 'Mon-Fri', time: '8:30am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.983234,
        lng: -76.989897,
        type: 'social',
        name: 'Meals on Wheels of Takoma Park/Silver Spring',
        address: '7410 New Hampshire Ave, Takoma Park, MD 20912',
        phone: '301-434-1922',
        website: 'https://www.mowtakoma.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-1pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.975674,
        lng: -76.987145,
        type: 'recreation',
        name: 'Rollingcrest-Chillum Splash Pool',
        address: '6120 Sargent Rd, Chillum, MD 20782',
        phone: '301-853-9115',
        website: 'https://www.pgparks.com/2481/Rollingcrest-Chillum-Splash-Pool',
        hours: [
            { days: 'Mon-Fri', time: '10am-6pm' },
            { days: 'Sat', time: '12pm-4pm' },
            { days: 'Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.989768,
        lng: -76.992096,
        type: 'education',
        name: 'Casa de Maryland, Inc.',
        address: '8151 15th Ave, Langley Park, MD 20783',
        phone: '301-431-4185',
        website: 'https://www.wearecasa.org/',
        hours: [
            { days: 'Mon-Fri', time: '8am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 39.003579,
        lng: -76.980771,
        type: 'social',
        name: 'Shepherd\'s Table',
        address: '8106 Georgia Ave, Silver Spring, MD 20910',
        phone: '301-585-6463',
        website: 'https://www.shepherdstable.org/',
        hours: [
            { days: 'Mon-Sun', time: '10:30am-12:30pm' },
            { days: 'Mon-Sun', time: '6pm-7:30pm' }
        ]
    },
    {
        lat: 38.987750,
        lng: -76.996456,
        type: 'social',
        name: 'Montgomery County Bar Foundation Pro Bono Program',
        address: '27 Courthouse Sq, Suite 120, Rockville, MD 20850',
        phone: '301-424-7651',
        website: 'https://www.montbar.org/?pg=ProBonoProgram',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },   
    {
        lat: 38.982246,
        lng: -76.992158,
        type: 'education',
        name: 'Takoma Park Library',
        address: '101 Philadelphia Ave, Takoma Park, MD 20912',
        phone: '301-891-7259',
        website: 'https://www.takomapark.info/library/',
        hours: [
            { days: 'Mon', time: '10am-9pm' },
            { days: 'Tue-Thu', time: '10am-8pm' },
            { days: 'Fri-Sat', time: '10am-6pm' },
            { days: 'Sun', time: 'Closed' }
        ]
    },    
    {
        lat: 38.984522,
        lng: -76.989158,
        type: 'social',
        name: 'Capital Area Food Bank',
        address: '4900 Puerto Rico Ave NE, Washington, DC 20017',
        phone: '202-644-9800',
        website: 'https://www.capitalareafoodbank.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat', time: '10am-2pm' },
            { days: 'Sun', time: 'Closed' }
        ]
    },    
    {
        lat: 39.008743,
        lng: -76.979335,
        type: 'social',
        name: 'Job Corps Admissions Office',
        address: '8201 Corporate Dr Suite 180, Landover, MD 20785',
        phone: '301-883-2400',
        website: 'https://www.jobcorps.gov/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.982733,
        lng: -76.987712,
        type: 'recreation',
        name: 'Takoma Park Recreation Center',
        address: '7315 New Hampshire Ave, Takoma Park, MD 20912',
        phone: '301-891-7289',
        website: 'https://takomaparkmd.gov/government/recreation/',
        hours: [
            { days: 'Mon-Fri', time: '2pm-9pm' },
            { days: 'Sat', time: '10am-4pm' },
            { days: 'Sun', time: 'Closed' }
        ]
    },
    {
        lat: 39.001235,
        lng: -76.985632,
        type: 'youth',
        name: 'CentroNia',
        address: '1420 Columbia Rd NW, Washington, DC 20009',
        phone: '202-332-4200',
        website: 'https://www.centronia.org/',
        hours: [
            { days: 'Mon-Fri', time: '7am-6pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.981665,
        lng: -76.982154,
        type: 'education',
        name: 'Prince George\'s Community College - University Town Center',
        address: '6505 Belcrest Rd, Hyattsville, MD 20782',
        phone: '301-546-8000',
        website: 'https://www.pgcc.edu/',
        hours: [
            { days: 'Mon-Fri', time: '8:30am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.988123,
        lng: -76.994789,
        type: 'social',
        name: 'Maryland Legal Aid',
        address: '8401 Corporate Dr, Suite 200, Landover, MD 20785',
        phone: '301-560-2100',
        website: 'https://www.mdlab.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    }, 
    {
        lat: 38.996835,
        lng: -76.982517,
        type: 'social',
        name: 'Housing Initiative Partnership, Inc.',
        address: '6525 Belcrest Rd, Suite 555, Hyattsville, MD 20782',
        phone: '301-699-3835',
        website: 'https://hiphomes.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.984511,
        lng: -76.993094,
        type: 'social',
        name: 'EveryMind',
        address: '1000 Twinbrook Pkwy, Rockville, MD 20851',
        phone: '301-424-0656',
        website: 'https://www.every-mind.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 39.000980,
        lng: -76.989300,
        type: 'health',
        name: 'Holy Cross Health Center at Montgomery College',
        address: '7600 Takoma Ave, Silver Spring, MD 20912',
        phone: '301-942-2184',
        website: 'https://www.holycrosshealth.org/',
        hours: [
            { days: 'Mon-Fri', time: '8am-4:30pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.983292,
        lng: -76.990217,
        type: 'education',
        name: 'Crossroads Community Food Network',
        address: '6930 Carroll Ave, Suite 426, Takoma Park, MD 20912',
        phone: '240-687-0144',
        website: 'https://www.crossroadscommunityfoodnetwork.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.979210,
        lng: -76.985218,
        type: 'social',
        name: 'HomeFree USA',
        address: '6200 Baltimore Ave, Suite 110, Riverdale, MD 20737',
        phone: '301-891-8400',
        website: 'https://www.homefreeusa.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.992643,
        lng: -76.996755,
        type: 'social',
        name: 'Maryland Crime Victims Resource Center',
        address: '1001 Prince George\'s Blvd, Suite 750, Upper Marlboro, MD 20774',
        phone: '301-952-0063',
        website: 'https://www.mdcrimevictims.org/',
        hours: [
            { days: 'Mon-Fri', time: '8:30am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.986023,
        lng: -76.981092,
        type: 'health',
        name: 'Children\'s National Health Center - Takoma Park',
        address: '7625 Maple Ave, Takoma Park, MD 20912',
        phone: '202-476-5000',
        website: 'https://childrensnational.org/',
        hours: [
            { days: 'Mon-Fri', time: '8am-4:30pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.993174,
        lng: -76.985831,
        type: 'health',
        name: 'Affiliated Sante Group',
        address: '12120 Plum Orchard Dr, Suite E, Silver Spring, MD 20904',
        phone: '301-572-6585',
        website: 'https://www.thesantegroup.org/',
        hours: [
            { days: 'Mon-Fri', time: '8am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.979652,
        lng: -76.989754,
        type: 'education',
        name: 'Montgomery College - Takoma Park/Silver Spring Campus',
        address: '7600 Takoma Ave, Takoma Park, MD 20912',
        phone: '240-567-1300',
        website: 'https://www.montgomerycollege.edu/',
        hours: [
            { days: 'Mon-Fri', time: '8am-10pm' },
            { days: 'Sat', time: '9am-5pm' },
            { days: 'Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.989875,
        lng: -76.994237,
        type: 'recreation',
        name: 'New Hampshire Estates Recreation Center',
        address: '7722 Carroll Ave, Takoma Park, MD 20912',
        phone: '301-439-5708',
        website: 'https://www.pgparks.com/',
        hours: [
            { days: 'Mon-Fri', time: '3pm-9pm' },
            { days: 'Sat', time: '10am-4pm' },
            { days: 'Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.985137,
        lng: -76.982385,
        type: 'social',
        name: 'Montgomery Housing Partnership',
        address: '12200 Tech Rd, Suite 250, Silver Spring, MD 20904',
        phone: '301-622-2400',
        website: 'https://www.mhpartners.org/',
        hours: [
            { days: 'Mon-Fri', time: '9am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.986403,
        lng: -76.985223,
        type: 'health',
        name: 'Community Health and Empowerment through Education and Research (CHEER)',
        address: '8545 Piney Branch Rd, Silver Spring, MD 20901',
        phone: '301-589-3633',
        website: 'https://www.communitycheer.org/',
        hours: [
            { days: 'Mon-Wed', time: '9am-5pm' },
            { days: 'Thu-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.987320,
        lng: -76.990771,
        type: 'social',
        name: 'Capital Area Food Bank - Takoma Park',
        address: '7676 New Hampshire Ave, Takoma Park, MD 20912',
        phone: '202-644-9800',
        website: 'https://www.capitalareafoodbank.org/',
        hours: [
            { days: 'Mon-Fri', time: '8am-5pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
        {
        lat: 38.9835463,
        lng: -76.9650716,
        type: 'recreation',
        name: 'Lane Manor Park',
        address: '7601 West Park Drive Hyattsville, MD 20783',
        phone: '301-699-2400',
        website: 'https://www.pgparks.com/facilities/lane-manor-park-building',
        hours: [
            { days: 'Mon-Sun', time: 'Dawn-Dusk' },
        ]
    },
        {
        lat: 38.9944103,
        lng: -76.9798883,
        type: 'recreation',
        name: 'Langley Hampshire Neighborhood Park',
        address: '1512 Quebec St, Hyattsville, MD 20783',
        website: 'https://www.pgparks.com/parks_trails/langley-hampshire-park',
        hours: [
            { days: 'Mon-Sun', time: 'Dawn-Dusk' },
        ]
    },
        {
        lat: 38.983863,
        lng: -76.960275,
        type: 'recreation',
        name: 'University Hills Park',
        address: '3400 Stanford StreetHyattsville, MD 20783',
        website: 'https://www.pgparks.com/parks_trails/university-hills-park',
        hours: [
            { days: 'Mon-Sun', time: 'Dawn-Dusk' },
        ]
    },
        {
        lat: 38.9737493,
        lng: -76.9872989,
        type: 'recreation',
        name: 'Parklawn Park',
        address: '6700 Conley RoadChillum, MD 20783',
        website: 'https://www.pgparks.com/parks_trails/parklawn-park',
        hours: [
            { days: 'Mon-Sun', time: 'Dawn-Dusk' },
        ]
    },
        {
        lat: 38.97304159999999,
        lng: -76.96546049999999,
        type: 'recreation',
        name: 'Lewisdale Park',
        address: '7001 West Park DriveHyattsville, MD',
        website: 'https://www.pgparks.com/parks_trails/lewisdale-park',
        hours: [
            { days: 'Mon-Sun', time: 'Dawn-Dusk' },
        ]
    },
        {
        lat: 38.9859342,
        lng: -76.9839246,
        type: 'social',
        name: 'Langley Park Multi-Service Center',
        address: '1401 University Blvd. East, Langley Park, MD 20783',
        phone: '301-434-4890',
        website: 'https://search.211md.org/search/11ab34c7-99b3-560d-91fb-f3f3d1221721',
        hours: [
            { days: 'Mon-Fri', time: '8:30am-4:30pm' },
            { days: 'Sat-Sun', time: 'Closed' }
        ]
    },
    {
        lat: 38.9843,
        lng: -76.9766,
        type: 'transit',
        name: 'Takoma Langley Crossroads Transit Center',
        address: 'New Hampshire Ave & University Blvd',
        phone: '(301) 588-5100',
        website: 'https://www.wmata.com',
        hours: [
            { days: 'Mon-Sun', time: '5am-12am' }
        ]
    },
    {
        lat: 38.9848,
        lng: -76.9737,
        type: 'transit',
        name: 'University Blvd & New Hampshire Ave Bus Hub',
        address: 'University Blvd & New Hampshire Ave',
        phone: '(301) 588-5100',
        hours: [
            { days: 'Mon-Sun', time: '24 hours' }
        ]
    },
    {
        lat: 38.9889,
        lng: -76.9859,
        type: 'transit',
        name: 'Riggs Road Bus Station',
        address: 'Riggs Road & University Blvd',
        phone: '(301) 588-5100',
        hours: [
            { days: 'Mon-Sun', time: '24 hours' }
        ]
    },
    {
        lat: 38.9935,
        lng: -76.9847,
        type: 'transit',
        name: 'Lewisdale Bus Terminal',
        address: '23rd Ave & Riggs Road',
        phone: '(301) 588-5100',
        hours: [
            { days: 'Mon-Sun', time: '5:30am-12am' }
        ]
    },
    {
        lat: 39.0019,
        lng: -76.9955,
        type: 'transit',
        name: 'Prince George\'s Plaza Metro Station',
        address: '3575 East West Highway, Hyattsville, MD 20782',
        phone: '(202) 637-7000',
        website: 'https://www.wmata.com',
        hours: [
            { days: 'Mon-Thu', time: '5am-12am' },
            { days: 'Fri', time: '5am-1am' },
            { days: 'Sat', time: '7am-1am' },
            { days: 'Sun', time: '8am-12am' }
        ]
    },
    {
        lat: 38.9846,
        lng: -77.0185,
        type: 'transit',
        name: 'Fort Totten Metro Station',
        address: '550 Galloway Street NE, Washington, DC 20011',
        phone: '(202) 637-7000',
        website: 'https://www.wmata.com',
        hours: [
            { days: 'Mon-Thu', time: '5am-12am' },
            { days: 'Fri', time: '5am-1am' },
            { days: 'Sat', time: '7am-1am' },
            { days: 'Sun', time: '8am-12am' }
        ]
    }
];

export { communityLocations };
