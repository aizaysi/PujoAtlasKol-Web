export const Tech = ['Web', 'Mobile', 'Backend', 'DevOps', 'Data Science'] as const;

export const NonTech = ['Design', 'Content', 'Coordinator', 'Community'] as const;

type MemberDetails = {
  id: string;
  avatar: string;
  name: string;
} & (
  | {
      department: (typeof Tech)[number];
      socials: {
        discord: string;
        github: string;
        linkedin?: string;
        twitter?: string;
      };
    }
  | {
      department: (typeof NonTech)[number];
      socials: {
        discord: string;
        github?: string;
        linkedin?: string;
        twitter?: string;
      };
    }
);

export const team: Record<string, MemberDetails[]> = {
  Founders: [
    {
      id: 'Leofossilis',
      name: 'Leofossilis',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=fossils',
      socials: {
        discord: 'https://discord.com/users/1082731230916788336',
      },
      department: 'Content',
    },
    {
      id: 'Angry Meow',
      name: 'Angry Meow',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed={engineer}',
      socials: {
        discord: 'https://discord.com/users/1243017049572245525',
      },
      department: 'Coordinator',
    },
  ],
  Leads: [
    {
      id: 'rabbitz',
      name: 'rabbitz',
      avatar:
        'https://api.dicebear.com/9.x/lorelei/svg?glassesProbability=100&seed=rabbitz&glasses=variant04',
      socials: {
        discord: 'https://discord.com/users/1033076736973361192',
        linkedin: 'https://www.linkedin.com/in/ayanava-karmakar',
        github: 'https://github.com/AyanavaKarmakar',
      },
      department: 'Web',
    },
    {
      id: 'nox',
      name: 'nox',
      avatar:
        'https://api.dicebear.com/9.x/lorelei/svg?glassesProbability=100&seed=thor&glasses=variant01',
      socials: {
        discord: 'https://discord.com/users/464333825137180672',
        github: 'https://github.com/wriddhi',
        linkedin: 'https://www.linkedin.com/in/wriddhi-hazra',
      },
      department: 'Web',
    },
    {
      id: 'heisenberg',
      name: 'Heisenberg',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=heisenberg',
      socials: {
        discord: 'https://discord.com/users/758731279625093138',
        github: 'https://github.com/Heisen47',
      },
      department: 'Web',
    },
    {
      id: 'inceptor',
      name: 'Sbasu',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=inceptor&eyes=variant18',
      socials: {
        discord: 'https://discord.com/users/798395088593354762',
        linkedin: 'https://www.linkedin.com/in/sayantan-basu-73ab4a92/',
        github: 'https://github.com/Sbasu2512',
      },
      department: 'Backend',
    },
    {
      id: 'akshay',
      name: 'Akshay A Parmar',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=aksha',
      socials: {
        discord: 'https://discord.com/users/892804617128251452',
        github: 'https://github.com/vitaminncpp',
      },
      department: 'Backend',
    },
    {
      id: 'Jethanand',
      name: 'Jethanand',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Jethanand',
      socials: {
        discord: 'https://discord.com/users/775623707011448852',
        github: 'https://github.com/pnaskardev',
      },
      department: 'Backend',
    },
    {
      id: 'thehappybaloney',
      name: 'TheHappyBaloney',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=baloon&glassesProbability=0',
      socials: {
        discord: 'https://discord.com/users/1232913986689962078',
        github: 'https://github.com/TheHappyBaloney',
        twitter: 'https://x.com/TheHappyBaloney',
        linkedin: 'https://www.linkedin.com/in/thehappybaloney',
      },
      department: 'Mobile',
    },
    {
      id: 'babumosai',
      name: 'Babumosai',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=babumosai',
      socials: {
        discord: 'https://discord.com/users/1265190463456022550',
        github: 'https://github.com/thebabumoshai',
      },
      department: 'DevOps',
    },
    {
      id: 'Chiken naget',
      name: 'Chiken naget',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=naget',
      socials: {
        discord: 'https://discord.com/users/1209132404501913620',
      },
      department: 'Design',
    },
    {
      id: 'WhiteTiger',
      name: 'WhiteTiger',
      avatar:
        'https://api.dicebear.com/9.x/lorelei/svg?seed=Aidan&beard=variant02&beardProbability=100&earrings[]&earringsProbability=100&eyebrows=variant12&eyes=variant02&frecklesProbability=0&glasses[]&glassesProbability=0&hair=variant05&hairAccessoriesProbability=0&head=variant03&mouth=happy02,sad08&nose=variant05',
      socials: {
        discord: 'https://discord.com/users/751361976369807370',
        linkedin: 'https://www.linkedin.com/in/sayan-naskar-1714a6330',
        github: 'https://github.com/sayannnaskarrr',
        twitter: 'https://x.com/sayannnaskarrr',
      },
      department: 'Community',
    },
    {
      id: 'rishi',
      name: 'rishi',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=rishi',
      socials: {
        discord: 'https://discord.com/users/283499137977024513',
        github: 'https://github.com/saptarshichakrabarti',
      },
      department: 'Coordinator',
    },
  ],
  Coordinators: [
    {
      id: 'Achakita',
      name: 'Achakita',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=reddit',
      socials: {
        discord: 'https://discord.com/users/903722676084949063',
        twitter: 'https://x.com/Achakita_TRUTH',
      },
      department: 'Community',
    },
    {
      id: 'Nghtcrwlrr',
      name: 'Nghtcrwlrr',
      avatar:
        'https://api.dicebear.com/9.x/lorelei/svg?seed=nghtcrwlrr&glassesProbability=100&glasses=variant04',
      socials: {
        discord: 'https://discord.com/users/324413042639241226',
      },
      department: 'Coordinator',
    },
    {
      id: 'Melancholic_Sobdokar',
      name: 'Melancholic_Sobdokar',
      avatar:
        'https://api.dicebear.com/9.x/lorelei/svg?seed=nightcrwlrr&beardProbability=0&glassesProbability=0',
      socials: {
        discord: 'https://discord.com/users/1090698750068002877',
      },
      department: 'Coordinator',
    },
  ],
  'Web Team': [
    {
      id: 'aizaysi',
      name: 'aizaysi',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=serbi',
      socials: {
        discord: 'https://discord.com/users/1224812991262884033',
        github: 'https://github.com/aizaysi',
      },
      department: 'Web',
    },
    {
      id: 'ritesh',
      name: 'Ritesh Das',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=john',
      socials: {
        discord: 'https://discord.com/users/1257600086331101260',
        github: 'https://github.com/Dyslex7c',
        linkedin: 'https://www.linkedin.com/in/ritesh-das-066205288/',
      },
      department: 'Web',
    },
    {
      id: 'yash',
      name: 'Yash Chaurasia',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=yash',
      socials: {
        discord: 'https://discord.com/users/615100553122414592',
        github: 'https://github.com/yashchaurasia667',
        linkedin: 'https://www.linkedin.com/in/yash-chaurasia-259553196/',
      },
      department: 'Web',
    },
  ],
  'Backend Team': [
    {
      id: 'indranil',
      name: 'Indranil Chakraborty ',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=indranil',
      socials: {
        discord: 'https://discord.com/users/629236605936205835',
        linkedin: 'https://www.linkedin.com/in/indranil-chakraborty-91ba60217',
        github: 'https://github.com/Andrew99xx',
      },
      department: 'Backend',
    },
  ],
  'Mobile Team': [
    {
      id: 'divyakumar',
      name: 'DivyaKumar Patel ',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg?seed=divyakum',
      socials: {
        discord: 'https://discord.com/users/1057312782401421332',
        github: 'https://github.com/Divyakumar21202',
      },
      department: 'Mobile',
    },
  ],
};
