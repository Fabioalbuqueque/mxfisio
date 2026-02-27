import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>Marcela Xavier </h2>
        </div>
        <nav className={styles.nav}>
          <Link href="#servicos">Serviços</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="#contato">Contato</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.intro}>
            <h1>Bem-vindo à Marcela Fisioterapeuta </h1>
            <p>Cuide da sua saúde com tratamentos personalizados e eficazes. Recupere sua mobilidade e qualidade de vida.</p>
            <div className={styles.ctas}>
              <Link href="#contato" className="primary">Agende uma Consulta</Link>
              <Link href="#servicos" className="secondary">Saiba Mais</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
           
            <div className={styles.placeholderImage}><Image src="/marcelaaa.png" alt="Imagem de Fisioterapia" width={600} height={500} /></div>
         
          </div>
        </section>
        <section id="servicos" className={styles.section}>
          <h2>Nossos Serviços</h2>
          <div className={styles.services}>
            <div className={styles.service}>
              <h3>Fisioterapia Ortopédica</h3>
              <p>Tratamento de lesões musculares, articulares e ósseas.</p>
            </div>
            <div className={styles.service}>
              <h3>Fisioterapia Esportiva</h3>
              <p>Preparação física e recuperação de atletas.</p>
            </div>
            <div className={styles.service}>
              <h3>fisioterapia dermatofuncional</h3>
              <p>Tratamentos para melhorar a função respiratória.</p>
            </div>
            <div className={styles.service}>
              <h3>fisioterapia osteopatia</h3>
              <p>Busca identificar e tratar a causa subjacente dos problemas, não apenas os sintomas.</p>
            </div>
          </div>
        </section>
        <section id="sobre" className={styles.section}>
          <h2>Sobre Mim</h2>
          <p>Sou uma fisioterapeuta experiente com mais de 10 anos de prática.
             Meu compromisso é oferecer cuidados personalizados para ajudar você a alcançar seus objetivos de saúde.</p>
        </section>
        <section id="contato" className={styles.section}>
          <h2>Entre em Contato</h2>
          <p>WhatsApp: (81) 99684-8464</p>
          <p>Endereço: Rua Dona Ada Vieira, 112 - Poco, Recife PE</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 Marcela Xavier . Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
