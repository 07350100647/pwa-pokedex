import Nullstack from 'nullstack'

class Home extends Nullstack {
  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} foi feito com Nullstack`
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app'
    return (
      <a
        class="ml-1 text-pink-500"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  /*   renderActionLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app'
    return (
      <a
        class="mb-1 inline-block text-pink-500"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  } */

  render() {
    return (
      <section class="my-0 mx-auto flex min-h-screen w-full max-w-3xl flex-wrap items-center p-6 md:flex-nowrap">
        <h1>Pokedex</h1>
      </section>
    )
  }
}

export default Home
