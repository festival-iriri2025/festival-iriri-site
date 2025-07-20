import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, MapPin, Users, Music, Trophy, Camera, Heart } from 'lucide-react'
import './App.css'

// Importando as imagens
import heroImage from './assets/M5NfY0AZc2Rj.jpg'
import riverImage from './assets/clmFnimUcqQK.jpg'
import communityImage from './assets/zarHM5xcPWil.jpg'
import boatImage from './assets/eWwm1gHut3mT.jpg'
import mapImage from './assets/5VdhS0hSrl12.jpg'
import peopleImage from './assets/FeAMkwZKSa6G.jpg'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">Festival do Iriri</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#comunidade" className="text-foreground hover:text-primary transition-colors">Comunidade</a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors">Galeria</a>
              <a href="#programacao" className="text-foreground hover:text-primary transition-colors">Programação</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            </nav>
            <Button className="btn-primary text-white">Participe</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section min-h-screen flex items-center justify-center text-white">
        <div className="container-max text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">16º Edição</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Festival do Iriri
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Amazônia, seus povos estão aqui
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>24 a 27 de Julho, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Comunidade Maribel, Km 185 Sul</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary text-white">
              Saiba Mais
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Ver Programação
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre o Festival */}
      <section id="sobre" className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Sobre o Festival
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um evento cultural que celebra a rica tradição ribeirinha da Amazônia, 
              promovendo a inclusão e visibilidade das comunidades tradicionais do Rio Iriri.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Comunidade</CardTitle>
                <CardDescription>
                  Celebrando a cultura beiradeira e as tradições dos povos ribeirinhos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <Music className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cultura</CardTitle>
                <CardDescription>
                  Apresentações culturais, música tradicional e expressões artísticas locais
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Tradição</CardTitle>
                <CardDescription>
                  Torneios de futebol, canoagem e pesca do tucunaré mantêm vivas as tradições
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* A Comunidade Maribel */}
      <section id="comunidade" className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Comunidade Maribel
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Localizada às margens do Rio Iriri, no Km 185 Sul da Transamazônica, 
                a comunidade Maribel é o coração pulsante desta celebração cultural. 
                Aqui, famílias ribeirinhas mantêm vivas as tradições ancestrais da Amazônia.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                A comunidade é representada pela AERIM (Associação dos Extrativistas do Rio Iriri / Maribel), 
                que trabalha pela preservação da cultura local e pelos direitos das populações tradicionais.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary">Ribeirinhos</Badge>
                <Badge variant="secondary">Extrativistas</Badge>
                <Badge variant="secondary">Tradições Ancestrais</Badge>
                <Badge variant="secondary">Km 185 Sul</Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Comunidade Maribel às margens do Rio Iriri" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Galeria
            </h2>
            <p className="text-xl text-muted-foreground">
              Imagens autênticas da comunidade e das belezas naturais do Rio Iriri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={riverImage} 
                alt="Rio Iriri" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={boatImage} 
                alt="Barcos tradicionais" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={peopleImage} 
                alt="Pessoas da comunidade" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg md:col-span-2">
              <img 
                src={mapImage} 
                alt="Localização da comunidade" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={heroImage} 
                alt="Paisagem amazônica" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programação */}
      <section id="programacao" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Programação 2025
            </h2>
            <p className="text-xl text-muted-foreground">
              Quatro dias de celebração, cultura e tradição
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-center">24 de Julho</CardTitle>
                <CardDescription className="text-center">Quinta-feira</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Abertura oficial</li>
                  <li>• Apresentações culturais</li>
                  <li>• Início dos torneios</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-center">25 de Julho</CardTitle>
                <CardDescription className="text-center">Sexta-feira</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Torneio de futebol</li>
                  <li>• Competição de canoagem</li>
                  <li>• Shows musicais</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-center">26 de Julho</CardTitle>
                <CardDescription className="text-center">Sábado</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Torneio de pesca do tucunaré</li>
                  <li>• Desfile cultural</li>
                  <li>• Apresentações folclóricas</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-center">27 de Julho</CardTitle>
                <CardDescription className="text-center">Domingo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Premiações</li>
                  <li>• Encerramento</li>
                  <li>• Confraternização</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Chegar */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Como Chegar
            </h2>
            <p className="text-xl text-muted-foreground">
              Localização e acesso à Comunidade Maribel
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Acesso por Terra</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A comunidade Maribel está localizada no Km 185 Sul da Rodovia Transamazônica, 
                acessível pela estrada conhecida localmente como Transiriri ou Estrada da Maribel.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">De Altamira</h4>
                    <p className="text-muted-foreground">Aproximadamente 300 km via Transamazônica</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">De Uruará</h4>
                    <p className="text-muted-foreground">95 km pela estrada vicinal do Km 185 Sul</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={mapImage} 
                alt="Mapa da região" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Contato
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato com a organização do festival
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>AERIM - Associação dos Extrativistas do Rio Iriri / Maribel</CardTitle>
                <CardDescription>Organização responsável pelo Festival do Iriri</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Comunidade Maribel, Km 185 Sul, Altamira - PA</span>
                </div>
                
                <div className="text-center pt-6">
                  <Button className="btn-primary text-white">
                    Mais Informações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container-max">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6" />
              <span className="text-xl font-bold">Festival do Iriri</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Celebrando a cultura ribeirinha da Amazônia
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2025 Festival do Iriri - Comunidade Maribel. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

