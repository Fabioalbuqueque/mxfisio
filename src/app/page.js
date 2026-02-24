import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Fisioterapia Profissional</h1>
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
            <h1>Bem-vindo à Fisioterapia Profissional</h1>
            <p>Cuide da sua saúde com tratamentos personalizados e eficazes. Recupere sua mobilidade e qualidade de vida.</p>
            <div className={styles.ctas}>
              <Link href="#contato" className="primary">Agende uma Consulta</Link>
              <Link href="#servicos" className="secondary">Saiba Mais</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            {/* Placeholder para imagem */}
            <div className={styles.placeholderImage}>Imagem de Fisioterapia</div>
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
              <h3>Fisioterapia Respiratória</h3>
              <p>Tratamentos para melhorar a função respiratória.</p>
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
          <p>Telefone: (11) 99999-9999</p>
          <p>Email: contato@fisioterapia.com</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Fisioterapia Profissional. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
