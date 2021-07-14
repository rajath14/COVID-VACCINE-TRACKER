const countries = {
    ad: "Andorra",
    ae: "United Arab Emirates",
    af: "Afghanistan",
    ag: "Antigua and Barbuda",
    ai: "Anguilla",
    al: "Albania",
    am: "Armenia",
    ao: "Angola",
    aq: "Antarctica",
    ar: "Argentina",
    as: "American Samoa",
    at: "Austria",
    au: "Australia",
    aw: "Aruba",
    ax: "Åland Islands",
    az: "Azerbaijan",
    ba: "Bosnia and Herzegovina",
    bb: "Barbados",
    bd: "Bangladesh",
    be: "Belgium",
    bf: "Burkina Faso",
    bg: "Bulgaria",
    bh: "Bahrain",
    bi: "Burundi",
    bj: "Benin",
    bl: "Saint Barthélemy",
    bm: "Bermuda",
    bn: "Brunei",
    bo: "Bolivia",
    bq: "Caribbean Netherlands",
    br: "Brazil",
    bs: "Bahamas",
    bt: "Bhutan",
    bv: "Bouvet Island",
    bw: "Botswana",
    by: "Belarus",
    bz: "Belize",
    ca: "Canada",
    cc: "Cocos (Keeling) Islands",
    cd: "DR Congo",
    cf: "Central African Republic",
    cg: "Republic of the Congo",
    ch: "Switzerland",
    ci: "Côte d'Ivoire (Ivory Coast)",
    ck: "Cook Islands",
    cl: "Chile",
    cm: "Cameroon",
    cn: "China",
    co: "Colombia",
    cr: "Costa Rica",
    cu: "Cuba",
    cv: "Cape Verde",
    cw: "Curaçao",
    cx: "Christmas Island",
    cy: "Cyprus",
    cz: "Czechia",
    de: "Germany",
    dj: "Djibouti",
    dk: "Denmark",
    dm: "Dominica",
    do: "Dominican Republic",
    dz: "Algeria",
    ec: "Ecuador",
    ee: "Estonia",
    eg: "Egypt",
    eh: "Western Sahara",
    er: "Eritrea",
    es: "Spain",
    et: "Ethiopia",
    eu: "European Union",
    fi: "Finland",
    fj: "Fiji",
    fk: "Falkland Islands",
    fm: "Micronesia",
    fo: "Faroe Islands",
    fr: "France",
    ga: "Gabon",
    gb: "United Kingdom",
    "gb-eng": "England",
    "gb-nir": "Northern Ireland",
    "gb-sct": "Scotland",
    "gb-wls": "Wales",
    gd: "Grenada",
    ge: "Georgia",
    gf: "French Guiana",
    gg: "Guernsey",
    gh: "Ghana",
    gi: "Gibraltar",
    gl: "Greenland",
    gm: "Gambia",
    gn: "Guinea",
    gp: "Guadeloupe",
    gq: "Equatorial Guinea",
    gr: "Greece",
    gs: "South Georgia",
    gt: "Guatemala",
    gu: "Guam",
    gw: "Guinea-Bissau",
    gy: "Guyana",
    hk: "Hong Kong",
    hm: "Heard Island and McDonald Islands",
    hn: "Honduras",
    hr: "Croatia",
    ht: "Haiti",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    im: "Isle of Man",
    in: "India",
    io: "British Indian Ocean Territory",
    iq: "Iraq",
    ir: "Iran",
    is: "Iceland",
    it: "Italy",
    je: "Jersey",
    jm: "Jamaica",
    jo: "Jordan",
    jp: "Japan",
    ke: "Kenya",
    kg: "Kyrgyzstan",
    kh: "Cambodia",
    ki: "Kiribati",
    km: "Comoros",
    kn: "Saint Kitts and Nevis",
    kp: "North Korea",
    kr: "South Korea",
    kw: "Kuwait",
    ky: "Cayman Islands",
    kz: "Kazakhstan",
    la: "Laos",
    lb: "Lebanon",
    lc: "Saint Lucia",
    li: "Liechtenstein",
    lk: "Sri Lanka",
    lr: "Liberia",
    ls: "Lesotho",
    lt: "Lithuania",
    lu: "Luxembourg",
    lv: "Latvia",
    ly: "Libya",
    ma: "Morocco",
    mc: "Monaco",
    md: "Moldova",
    me: "Montenegro",
    mf: "Saint Martin",
    mg: "Madagascar",
    mh: "Marshall Islands",
    mk: "North Macedonia",
    ml: "Mali",
    mm: "Myanmar",
    mn: "Mongolia",
    mo: "Macau",
    mp: "Northern Mariana Islands",
    mq: "Martinique",
    mr: "Mauritania",
    ms: "Montserrat",
    mt: "Malta",
    mu: "Mauritius",
    mv: "Maldives",
    mw: "Malawi",
    mx: "Mexico",
    my: "Malaysia",
    mz: "Mozambique",
    na: "Namibia",
    nc: "New Caledonia",
    ne: "Niger",
    nf: "Norfolk Island",
    ng: "Nigeria",
    ni: "Nicaragua",
    nl: "Netherlands",
    no: "Norway",
    np: "Nepal",
    nr: "Nauru",
    nu: "Niue",
    nz: "New Zealand",
    om: "Oman",
    pa: "Panama",
    pe: "Peru",
    pf: "French Polynesia",
    pg: "Papua New Guinea",
    ph: "Philippines",
    pk: "Pakistan",
    pl: "Poland",
    pm: "Saint Pierre and Miquelon",
    pn: "Pitcairn Islands",
    pr: "Puerto Rico",
    ps: "Palestine",
    pt: "Portugal",
    pw: "Palau",
    py: "Paraguay",
    qa: "Qatar",
    re: "Réunion",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    rw: "Rwanda",
    sa: "Saudi Arabia",
    sb: "Solomon Islands",
    sc: "Seychelles",
    sd: "Sudan",
    se: "Sweden",
    sg: "Singapore",
    sh: "Saint Helena, Ascension and Tristan da Cunha",
    si: "Slovenia",
    sj: "Svalbard and Jan Mayen",
    sk: "Slovakia",
    sl: "Sierra Leone",
    sm: "San Marino",
    sn: "Senegal",
    so: "Somalia",
    sr: "Suriname",
    ss: "South Sudan",
    st: "São Tomé and Príncipe",
    sv: "El Salvador",
    sx: "Sint Maarten",
    sy: "Syria",
    sz: "Eswatini (Swaziland)",
    tc: "Turks and Caicos Islands",
    td: "Chad",
    tf: "French Southern and Antarctic Lands",
    tg: "Togo",
    th: "Thailand",
    tj: "Tajikistan",
    tk: "Tokelau",
    tl: "Timor-Leste",
    tm: "Turkmenistan",
    tn: "Tunisia",
    to: "Tonga",
    tr: "Turkey",
    tt: "Trinidad and Tobago",
    tv: "Tuvalu",
    tw: "Taiwan",
    tz: "Tanzania",
    ua: "Ukraine",
    ug: "Uganda",
    um: "United States Minor Outlying Islands",
    un: "United Nations",
    us: "United States",
    "us-ak": "Alaska",
    "us-al": "Alabama",
    "us-ar": "Arkansas",
    "us-az": "Arizona",
    "us-ca": "California",
    "us-co": "Colorado",
    "us-ct": "Connecticut",
    "us-de": "Delaware",
    "us-fl": "Florida",
    "us-ga": "Georgia",
    "us-hi": "Hawaii",
    "us-ia": "Iowa",
    "us-id": "Idaho",
    "us-il": "Illinois",
    "us-in": "Indiana",
    "us-ks": "Kansas",
    "us-ky": "Kentucky",
    "us-la": "Louisiana",
    "us-ma": "Massachusetts",
    "us-md": "Maryland",
    "us-me": "Maine",
    "us-mi": "Michigan",
    "us-mn": "Minnesota",
    "us-mo": "Missouri",
    "us-ms": "Mississippi",
    "us-mt": "Montana",
    "us-nc": "North Carolina",
    "us-nd": "North Dakota",
    "us-ne": "Nebraska",
    "us-nh": "New Hampshire",
    "us-nj": "New Jersey",
    "us-nm": "New Mexico",
    "us-nv": "Nevada",
    "us-ny": "New York",
    "us-oh": "Ohio",
    "us-ok": "Oklahoma",
    "us-or": "Oregon",
    "us-pa": "Pennsylvania",
    "us-ri": "Rhode Island",
    "us-sc": "South Carolina",
    "us-sd": "South Dakota",
    "us-tn": "Tennessee",
    "us-tx": "Texas",
    "us-ut": "Utah",
    "us-va": "Virginia",
    "us-vt": "Vermont",
    "us-wa": "Washington",
    "us-wi": "Wisconsin",
    "us-wv": "West Virginia",
    "us-wy": "Wyoming",
    uy: "Uruguay",
    uz: "Uzbekistan",
    va: "Vatican City (Holy See)",
    vc: "Saint Vincent and the Grenadines",
    ve: "Venezuela",
    vg: "British Virgin Islands",
    vi: "United States Virgin Islands",
    vn: "Vietnam",
    vu: "Vanuatu",
    wf: "Wallis and Futuna",
    ws: "Samoa",
    xk: "Kosovo",
    ye: "Yemen",
    yt: "Mayotte",
    za: "South Africa",
    zm: "Zambia",
    zw: "Zimbabwe",
};

var COUNTRY_NAME = 0;
var TOTAL_VACCINES = 3;
var PER_HUNDRED = 8;

fetch(
        "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv"
    )
    .then((response) => response.text())
    .then((data) => processData(data));

function processData(data) {
    const rows = data.split(/\r?\n|\r/);
    let currentCountry = rows[1].split(",")[COUNTRY_NAME];
    let nextCountry = "";
    let lastRowForCountry = false;
    for (let i = 1; i < rows.length - 1; i++) {
        let cells = rows[i].split(",");
        if (i == rows.length - 2) {
            lastRowForCountry = true;
        } else {
            nextCountry = rows[i + 1].split(",")[COUNTRY_NAME];
            lastRowForCountry = nextCountry != currentCountry;
        }
        // Check if it's the last row for that country
        if (lastRowForCountry) {
            const totalVaccines = cells[TOTAL_VACCINES];
            const percentage = cells[PER_HUNDRED];
            addCountry(currentCountry, totalVaccines, percentage);
            currentCountry = nextCountry;
        }
    }
}

function animateValue(obj, start, end, duration, percentage) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = `${Math.floor(progress * (end - start) + start)}<br>${percentage}%`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function addCountry(countryName, totalVaccines, percentage) {
    let countryFound = false;
    for (countryCode in countries) {
        if (countries[countryCode] == countryName) {
            countryFound = true;
            const span = document.createElement("span");
            span.className = "overlay";
            const div = document.createElement("div");
            div.className = `country flag-icon-background flag-icon-${countryCode}`;
            document.getElementById("countries").appendChild(div);
            div.appendChild(span);
            animateValue(span, 0, parseInt(totalVaccines), 2000, percentage);
            span.addEventListener("mouseenter", () => {
                span.innerHTML = countryName;
            });
            span.addEventListener("mouseleave", () => {
                span.innerHTML = `${totalVaccines}<br>${percentage}%`;
            });
            break;
        }
    }
    if (!countryFound) {
        console.log(countryName, "not recognized");
    }
}