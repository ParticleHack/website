import ENV from 'particle-hack/config/environment';

const { rootURL } = ENV;

export default [
  {
    title: '$100 Muon Detector',
    imageURL: `${rootURL}assets/img/muon-detector.png`,
    projectLinks: [
      { title: 'Cornell Project Page', url: 'https://arxiv.org/abs/1606.01196' }
    ],
    socialLinks: [

    ],
    copy: `<p>Muons, the heavier cousins of the electron are
    pretty common particles in nature, especially from
    cosmic rays, but also often used in the detection of
    neutrinos and other particles. However, muon
    detectors have traditionally been a complex piece of
    machinery to manufacture. This design shows how to make
    your own desktop muon detector for about 100 USD.</p>`
  },
  {
    title: 'Simplest Particle Detector',
    imageURL: `${rootURL}assets/img/diy-particle-detector.png`,
    projectLinks: [
      { title: 'Tutorial Homepage', url: 'https://blogs.scientificamerican.com/critical-opalescence/how-to-build-the-worlds-simplest-particle-detector/' }
    ],
    socialLinks: [

    ],
    copy: `<p>If this is your first time building a particle detector of any kind, you might want to try a simple cloud chamber,
    made using readily available equipment. It will show traces of passing cosmic rays, or decay particles from radioactive sources,
    as think white streaks of cloud inside the chamber. Then, when you have the idea, you can work your way up to a more
    <a class="c-markup-link o-color-shifting o-underline-shifting" href="https://www.particlehack.org/portfolio/cloud-chamber/" target="_blank">advanced cloud chamber</a> project.</p>`
  },
  {
    title: 'CRAYFIS Cosmic Ray Detection',
    imageURL: `${rootURL}assets/img/crayfis-cosmic-ray-detection.png`,
    projectLinks: [
      { title: 'CRAYFIS Homepage', url: 'https://crayfis.io/' }
    ],
    socialLinks: [

    ],
    copy: `<p>Cosmic rays are hitting the Earth’s atmosphere all the time and creating showers of charged particles
    that rain down on us. The most energetic cosmic rays create vast showers spread over huge distances.
    The CRAYFIS project uses your cell phone when it is asleep to detect the charged particles from cosmic
    ray showers and piece together global maps of cosmic ray activity.</p>`
  },
  {
    title: 'Build a Cyclotron',
    imageURL: `${rootURL}assets/img/diy-cyclotron.png`,
    projectLinks: [
      { title: 'Cyclotrons.net Forum Discussion', url: 'https://www.cyclotrons.net/showthread.php/31-quot-I-want-to-build-a-cyclotron-for-my-science-fair-project-quot' },
      { title: 'The Cyclotron Kids Project', url: 'https://thecyclotronkids.org/' }
    ],
    socialLinks: [

    ],
    copy: `<p>If you’re getting really serious about building your own particle accelerator, a
    cyclotron might be the way to go. But beware, you need time and commitment to see it through.
    Finding detailed documentation for how to build a cyclotron is challenging because in practice,
    building one is a series of compromises based around an original idea. You’ll need to learn the physics
    concepts reasonably well to get the whole thing operational. However, read the links below, and you’ll start to
    get a sense for what you have to do. And remember that the Cyclotron Kids did it!</p>`
  },
  {
    title: 'Ping-pong Ball Accelerator',
    imageURL: `${rootURL}assets/img/diy-particle-detector.png`,
    projectLinks: [
      { title: 'Tutorial: Instructables', url: 'https://www.instructables.com/id/How-to-make-a-macro-particle-accelerator/' },
      { title: 'Tutorial: Explore Your Universe', url: 'https://www.exploreyouruniverse.org/how-to-build-and-use-the-salad-bowl-particle-accelerator/' },
      { title: 'Tutorial: Rimstar', url: 'https://rimstar.org/science_electronics_projects/ball_cyclotron_electrostatic_accelerator.htm' }
    ],
    socialLinks: [

    ],
    copy: `<p>The simplest version of particle acceleration involves the simple alternating pushing and pulling of
    particles by electromagnetic fields. One way to show this on the macro scale is to
    accelerate a ping pong ball around a glass bowl by using conductive tape to provide the pushes and pulls.
    There are a series of designs available, some of which use van de Graaf generators to provide the strong
    electric fields, while others use electrical transformers. Have a look at some of the options
    linked below before deciding which version suits you best.</p>`
  },
  {
    title: 'Kaggle Competitions',
    imageURL: `${rootURL}assets/img/kaggle-screenshot.png`,
    projectLinks: [
      { title: 'Kaggle Homepage', url: 'https://www.kaggle.com/' }
    ],
    socialLinks: [
      { label: 'Kaggle on Twitter', iconFileName: 'icon-twitter-logo', url: 'https://www.twitter.com/kaggle' },
      { label: 'Kaggle on Facebook', iconFileName: 'icon-facebook-logo-f', url: 'https://www.twitter.com/kaggle' },
      { label: 'Kaggle on GitHub', iconFileName: 'icon-github-logo-mark', url: 'https://github.com/Kaggle' },
    ],
    copy: `<p>For the more advanced coders among you, Kaggle offers occasional particle-physics-themed
    challenges in which you can win money for the best solutions to the problems on offer.
    Past challenges have included <a class="c-markup-link o-color-shifting o-underline-shifting" href="https://www.kaggle.com/c/higgs-boson">using ATLAS data to find the Higgs Boson</a>
    and <a class="c-markup-link o-color-shifting o-underline-shifting" href="https://www.kaggle.com/c/flavours-of-physics"> using LHCb data to look for signs of new physics</a>.
    Most winning solutions tend to use convolutional neural networks
    plus a combination of other ideas, but you often don’t need to know much of the physics involved.
    Learning it is just a fun bonus!</p>`
  },
  {
    title: 'Particle Physics Playground',
    imageURL: `${rootURL}assets/img/cern-lhc.png`,
    projectLinks: [
      { title: 'P^3 Homepage', url: 'https://particle-physics-playground.github.io/' }
    ],
    socialLinks: [
      { label: 'Particle Physics Playground on GitHub', iconFileName: 'icon-github-logo-mark', url: 'https://github.com/particle-physics-playground/playground' },
    ],
    copy: `<p>Want to get your hands on real particle physics data from the
    Large Hadron Collider? Here is a place you can go to get the data,
    learn how to interact with it, and potentially even make your own
    discoveries. The site has tutorials and exercises to get you started,
    based on open github code repositories and iPython notebooks.</p>`
  },
  {
    title: 'Lhc@home',
    imageURL: `${rootURL}assets/img/lhc-at-home.png`,
    projectLinks: [
      { title: 'LHC@home Website', url: 'https://lhcathome.web.cern.ch/' }
    ],
    socialLinks: [

    ],
    copy: `<p>If you have some spare idle time available on your compute, why not
    donate it to help find new particles, improve the operation of particle
    collider beams, or simulate physics to help improve theoretical understanding
    of the universe. LHC@home uses your unused background computing cycles
    to perform these calculations as part of a large distributed computing
    effort aimed at a series of projects.</p>`
  },
  {
    title: 'Cloud Chamber',
    imageURL: 'assets/img/cloud-chamber-particle-detector.png',
    projectLinks: [
      { title: 'Tutorial &emdash; Instructables', url: 'https://www.instructables.com/id/Cloud-Chamber-Particle-Detector/' }
    ],
    socialLinks: [

    ],
    copy: `<p>If you’ve ever wanted to see subatomic particles, this is
    your chance! Using a few hundred dollars worth of equipment,
    you can build a high-quality miniature cloud chamber that shows
    passing subatomic particles from either cosmic rays or a
    radioactive source as streaks of cloud inside the chamber.
    Developed by Siena College faculty and students over a series of
    Science Hack Day events and other workshops, the design continues
    to iterate toward an easier build that more reliable with better results.
    The team welcomes ideas for how to improve the system as well!</p>`
  }
];
