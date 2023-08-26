import AboutMe from '../components/RightSection/AboutMe.vue';
import MySkillset from '../components/RightSection/MySkillset.vue';
import MyProjects from '../components/RightSection/MyProjects.vue';
import ContactMe from '../components/RightSection/ContactMe.vue'
import DownloadSvg from '../components/svgComponents/DownloadSvg.vue';
import LinkedinSvg from '../components/svgComponents/LinkedinSvg.vue'
import GithubSvg from '../components/svgComponents/GithubSvg.vue';
import JavaScriptSvg from '../components/svgComponents/JavaScriptSvg.vue';
import PythonSvg from '../components/svgComponents/PythonSvg.vue';
import ReactSvg from '../components/svgComponents/ReactSvg.vue';
import NodeJsSvg from '../components/svgComponents/NodeJsSvg.vue';

export function allData() {
    const svgs = [GithubSvg, LinkedinSvg, DownloadSvg]

    const socialContact = [
        {
            name: 'Github',
            link: 'www.google.com'
        },
        {
            name: 'Linkedin',
            link: 'www.google.com'
        },
        {
            name: 'Download resume',
            link: 'www.google.com'
        }
    ]

    const skillSet = [
        {
            component: ReactSvg,
            name: 'React Native',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        },
        {
            component: JavaScriptSvg,
            name: 'JavaScript',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        },
        {
            component: PythonSvg,
            name: 'Python',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        },
        {
            component: NodeJsSvg,
            name: 'Node Js',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        }
    ]

    const fixedSectionData = {
        'About Me': {
            component: AboutMe,
            name: 'about',
            header: ["Hello, I'm", 'Jimoh Adekunle'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        },
        'Skillset': {
            component: MySkillset,
            name: 'skills',
            header: ['My', 'Toolset'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        },
        'Projects': {
            component: MyProjects,
            name: 'projects',
            header: ['See', 'Recent Projects'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        },
        'Contact Me': {
            component: ContactMe,
            name: "contact",
            header: ['Send A', 'Message Today'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        }
    }

    const projects = ref([{
        title: 'PROJECT TITLE',
        info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten',
        type: 'web and mobile development',
        link: 'www.google.com',
        language: 'web'
    }])

    return {
        socialContact,
        projects,
        fixedSectionData,
        svgs,
        skillSet,
    }
}