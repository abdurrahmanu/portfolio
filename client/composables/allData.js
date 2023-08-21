import AboutMe from '../components/RightSide/AboutMe.vue';
import AllSkillset from '../components/RightSide/AllSkillset.vue';
import ProjectsList from '../components/RightSide/ProjectsList.vue';
import ContactMe from '../components/RightSide/ContactMe.vue'
import DownloadSvg from '../components/svgComponents/DownloadSvg.vue';
import LinkedinSvg from '../components/svgComponents/LinkedinSvg.vue'
import GithubSvg from '../components/svgComponents/GithubSvg.vue';
import JavaScriptSvg from '../components/svgComponents/JavaScriptSvg.vue';
import PythonSvg from '../components/svgComponents/PythonSvg.vue';
import ReactSvg from '../components/svgComponents/ReactSvg.vue';
import NodeJsSvg from '../components/svgComponents/NodeJsSvg.vue';

export function allData() {
    const svgs = [GithubSvg, LinkedinSvg, DownloadSvg]

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

    const dynamicComponentData = {
        'About Me': {
            component: AboutMe,
            name: 'AboutMe',
            header: ["Hello, I'm", 'Jimoh Adekunle'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        },
        'Skillset': {
            component: AllSkillset,
            name: 'AllSkillset',
            header: ['My', 'Toolset'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        },
        'Projects': {
            component: ProjectsList,
            name: 'ProjectsList',
            header: ['See', 'Recent Projects'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        },
        'Contact Me': {
            component: ContactMe,
            name: "ContactMe",
            header: ['Send A', 'Message Today'],
            info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten makropp utan posam neluvis i hbt postpatologi. Nösk rynar vis. Nyrad ör. Gunde debåning att mikarad debus sepp tenengen. Lament gure samt krora'
        }
    }

    return {
        dynamicComponentData, svgs, skillSet
    }
}