<template>
  <div class="min-h-screen bg-[#1E1E1E] text-white font-sans">
    <!-- Navigation -->
    <nav class="hidden md:block fixed top-0 left-0 w-full bg-[#1E1E1E] z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="text-2xl font-bold flex items-center justify-center gap-5"><img src="/assets/logo.png" alt="Logotipo" class="w-10 h-10">Dev Matheus Marques</a>
          <div class="hidden md:flex space-x-8">
            <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`" class="hover:text-[#BCE7FD] transition-colors">
              {{ item }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="container-home w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <div class="container pt-32 text-center flex flex-col items-center justify-center">
        <div class="w-40 h-40 mx-auto mb-8">
          <img
              src="/assets/matheus.jpg?height=160&width=160"
              alt="Matheus Marques"
              class="rounded-full w-full h-full object-cover"
          />
        </div>
        <h1 class="text-5xl font-bold mb-6">Matheus Marques</h1>
        <p class="text-xl text-[#8B8A91] max-w-2xl mx-auto mb-8 p-5">
          Sou um desenvolvedor apaixonado, com um talento especial para criar experiências digitais impressionantes. Vamos trabalhar juntos para dar vida às suas ideias.
        </p>
      </div>
    </section>

    <!-- About Section -->
    <section id="sobre mim" class="py-20 bg-[#2B2B2B]">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center">Sobre Mim</h2>
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-[#8B8A91] mb-8">
            Com experiência em desenvolvimento, sou especialista em criar sites e sistemas bonitos e funcionais que entregam resultados. Minha abordagem combina criatividade com conhecimento técnico para construir soluções que se destacam no cenário digital.<br>
            Possuo conhecimento em diversas tecnologias como Java (Spring Boot), JavaScript (Vue.js, React.js, Angular), PHP (Laravel), MySQL, MongoDB, Docker, AWS, metodologias ágeis (Scrum) e controle de versão (Git).
          </p>
          <a href="/docs/000001Currículo%20-%20Matheus%20Henrique%20Couto%20Marques.pdf" download="Currículo - Matheus Marques">
            <button class="px-8 py-3 bg-[#BCE7FD] text-[#1E1E1E] rounded-full font-semibold hover:bg-opacity-90 transition-all cursor-pointer">
              Download Currículo
            </button>
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="serviços" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center">Serviços</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index"
               class="p-6 bg-[#2B2B2B] rounded-lg">
            <div class="w-12 h-12 bg-[#BCE7FD] rounded-lg mb-4 flex items-center justify-center">
              <component :is="service.icon" class="w-6 h-6 text-[#1E1E1E]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-[#8B8A91]">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projetos" class="py-20 bg-[#2B2B2B]">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center">Projetos</h2>
        <div class="hidden md:flex justify-center gap-4 mb-12">
          <button v-for="filter in filters" :key="filter"
                  @click="activeFilter = filter"
                  :class="[
                    'px-6 py-2 rounded-full cursor-pointer',
                    activeFilter === filter
                      ? 'bg-[#BCE7FD] text-[#1E1E1E] font-semibold'
                      : 'border border-[#8B8A91] text-[#8B8A91] hover:border-[#BCE7FD] hover:text-[#BCE7FD]'
                  ]">
            {{ filter }}
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in filteredProjects" :key="index"
               class="group relative overflow-hidden rounded-lg">
            <div class="text-center">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-[#8B8A91] mb-4">{{ project.category }}</p>
              <p class="text-[#8B8A91] mb-4 text-justify">{{ project.description }}</p>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-[#BCE7FD] hover:underline cursor-pointer">
            <img :src="project.image" :alt="project.title"
                   class="w-full h-64 object-cover" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center">Entre em contato comigo por Whatsapp</h2>
        <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input v-model="formData.name" type="text" placeholder="Nome"
                   class="bg-[#2B2B2B] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BCE7FD]" />
            <input v-model="formData.email" type="email" placeholder="E-mail"
                   class="bg-[#2B2B2B] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BCE7FD]" />
          </div>
          <input v-model="formData.subject" type="text" placeholder="Assunto"
                 class="w-full bg-[#2B2B2B] px-4 py-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#BCE7FD]" />
          <textarea v-model="formData.message" rows="6" placeholder="Mensagem"
                    class="w-full bg-[#2B2B2B] px-4 py-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#BCE7FD]"></textarea>
          <button type="submit"
                  class="w-full py-3 bg-[#BCE7FD] text-[#1E1E1E] rounded-lg font-semibold hover:bg-opacity-90 transition-all cursor-pointer">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-[#2B2B2B]">
      <div class="container mx-auto px-6 text-center">
        <p class="text-[#8B8A91] mb-6">Minhas Redes Sociais</p>
        <div class="flex justify-center space-x-6">
          <a v-for="social in socials" :key="social.name"
             :href="social.url"
             class="text-[#8B8A91] hover:text-[#BCE7FD] transition-colors">
            <component :is="social.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Code,
  Layout,
  Palette,
  Github,
  Linkedin,
  Instagram,
  type LucideIcon
} from 'lucide-vue-next'

const navItems = ['Home', 'Sobre Mim', 'Serviços', 'Projetos', 'Contato']

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Desenvolvimento web',
    description: 'Criação de sites e sistemas web responsivos e de alto desempenho usando tecnologias modernas.'
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Projetando interfaces de usuário bonitas e intuitivas com ótima experiência do usuário.'
  },
  {
    icon: Palette,
    title: 'Tranformo idéias em realidade',
    description: 'Tiro sua idéia do papel e a transformo em algo que lhe trás resultados positivos gerando ganho de tempo, assertividade e agilidade.'
  }
]

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'HealthSync Agendamentos',
    category: 'Desenvolvimento',
    description: 'Pensado para clínicas e consultórios que desejam organizar atendimentos, pacientes e profissionais da saúde de forma intuitiva, centralizada e moderna.',
    image: '/assets/health-sync-agendamentos.png?height=400&width=600',
    link: 'https://healthsyncagendamentos.vercel.app/'
  },
  {
    title: 'Calculadora Pro',
    category: 'Desenvolvimento',
    description: 'Simule, compare e tome decisões melhores com mais de 25 calculadoras inteligentes divididas em três categorias essenciais: Trabalhista | Financeira Pessoal | Planejamento Profissional.',
    image: '/assets/calculadora-pro.png?height=400&width=600',
    link: 'https://calculator-pro-dmm.vercel.app/signin'
  },
  {
    title: 'Site Institucional – Designer de Interiores: Beatriz Jardim Santana',
    category: 'Desenvolvimento',
    description: 'site moderno e responsivo para a Designer de Interiores Beatriz Jardim Santana, com o objetivo de apresentar seu portfólio de projetos Residenciais e Comerciais de forma elegante e funcional.',
    image: '/assets/site-institucional-beatriz-jardim-santana.png?height=400&width=600',
    link: 'https://meuzoom.vercel.app/'
  },
  {
    title: 'Hours PJ Tracker',
    category: 'Desenvolvimento',
    description: 'Hours PJ Tracker permite que profissionais autônomos ou terceirizados tenham controle total sobre suas jornadas de trabalho, com filtros inteligentes e exportação de relatórios.',
    image: '/assets/hours-pj-tracker.png?height=400&width=600',
    link: 'https://hours-pj-tracker.vercel.app/'
  },
  {
    title: 'Aplicativo de Planejamento de Viagens',
    category: 'Desenvolvimento',
    description: 'Um aplicativo para planejar viagens de carro ou moto, integrando APIs para rotas, pedágios e cálculo de combustível. Ideal para quem quer prever os custos antes de pegar a estrada!',
    image: '/assets/travel-cost-calculator.png?height=400&width=600',
    link: 'https://travel-cost-calculator-zeta.vercel.app/'
  },
  {
    title: 'Consulta Pública de CNPJ',
    category: 'Desenvolvimento',
    description: 'Um portal moderno, responsivo e acessível para consultar dados de empresas brasileiras pelo número do CNPJ, utilizando a API pública da ReceitaWS.',
    image: '/assets/portal-consulta-cnpj.png?height=400&width=600',
    link: 'https://portal-consulta-cnpj.vercel.app/'
  },
  {
    title: 'MM Store',
    category: 'Desenvolvimento',
    description: 'Aplicação de e-commerce que integra a Fake Store API como fonte de dados. Com funcionalidades que simulam uma experiência real de compra online.',
    image: '/assets/mm-store.png?height=400&width=600',
    link: 'https://portal-consulta-cnpj.vercel.app/'
  },
  {
    title: 'Movie Verse',
    category: 'Desenvolvimento',
    description: 'Aplicação web desenvolvida para explorar filmes de forma prática e intuitiva, consumindo dados diretamente da API do The Movie Database (TMDB).',
    image: '/assets/movie-verse.png?height=400&width=600',
    link: 'https://movie-verse-cinema-explorer.vercel.app/'
  },
  {
    title: 'Gerador de Currículos',
    category: 'Desenvolvimento',
    description: 'Um gerador de currículos, onde o usuário pode escolher qual modelo mais lhe agrada, preencher um formulário com os dados para serem anexados no currículo e então efetuar o download do PDF.',
    image: '/assets/resume-generator.png?height=400&width=600',
    link: 'https://resume-generator-rho-seven.vercel.app/'
  },
  {
    title: 'Cardápio Online',
    category: 'Desenvolvimento',
    description: 'Um cardápio digital que utiliza integração com a API do Whatsapp para envio dos pedidos a hamburgueria. O envio de pedidos funciona apenas no horário definido, impedindo que pedidos sejam feitos antes do estabelecimento estar aberto.',
    image: '/assets/cardapio-online.png?height=400&width=600',
    link: 'https://devmatheusmarques-imperiohamburgueria.vercel.app/'
  },
  {
    title: "Cookin'Up",
    category: 'Desenvolvimento',
    description: 'Um buscador de receitas para se fazer com ingredientes que encontramos em casa. Possui vínculo com um JSON que fornece as opções de receitas contendo os ingrediente necessários e modo de preparo.',
    image: '/assets/cookin-up.png?height=400&width=600',
    link: 'https://devmatheusmarques-cookin-up.vercel.app/'
  },
  {
    title: 'Memory Game',
    category: 'Desenvolvimento',
    description: 'Um pequeno projeto que nasceu de uma necessidade bem especial: ajudar minha mãe a se distrair e exercitar o raciocínio de forma simples e acessível.',
    image: '/assets/memory-game.png?height=400&width=600',
    link: 'https://memory-game-iota-coral.vercel.app/'
  },
  {
    title: 'Controle Financeiro',
    category: 'Desenvolvimento',
    description: 'Página de controle financeiro, onde o usuário pode inserir dados de entrada e saída, de forma que conforme os dados são registrados, é atualizado os campos de informações das finanças.',
    image: '/assets/controle-financeiro.png?height=400&width=600',
    link: 'https://devmatheusmarques-controle-financeiro.vercel.app/'
  },
  {
    title: 'MegManicure',
    description: 'Design de protótipo de tela para um aplicativo de manicure. Os usuários podem realizar agendamentos e as manicures conseguem agender e verifcar os clientes agendados.',
    category: 'Design',
    image: '/assets/meg-manicure.png?height=400&width=600',
    link: 'https://megmanicure.my.canva.site/'
  },
]

type FilterType = 'Todos' | 'Desenvolvimento' | 'Design';
const filters: FilterType[] = ['Todos', 'Desenvolvimento', 'Design']
const activeFilter = ref<FilterType>('Todos')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') return projects
  return projects.filter(project => project.category === activeFilter.value)
})

interface Social {
  name: string;
  icon: LucideIcon;
  url: string;
}

const socials: Social[] = [
  { name: 'Github', icon: Github, url: 'https://github.com/DevMatheusMarques' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/matheus-henrique-couto-marques/' },
  { name: 'Instagram', icon: Instagram, url: '#' }
]

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formData = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  const message = encodeURI(`*Nome:* ${formData.value.name}\n\n*E-mail:* ${formData.value.email}\n\n*Assunto:* ${formData.value.subject}\n\n\n${formData.value.message}`);

  window.open(`https://wa.me/18991532494?text=${message}`, "_blank");
  console.log('Form submitted:', formData.value.name)
}
</script>

<style>
@import "tailwindcss";
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

.container-home {
  background-image: url("../public/assets/background.png");
}
</style>