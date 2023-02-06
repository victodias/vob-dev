export function Navbar() {
  return (
    <header>
      <nav>
        <ul className='list-none flex gap-10 text-sm justify-center py-8 text-slate-400 font-semibold'>
          <li className='transition duration-300 hover:drop-shadow-md hover:text-white'>
            <a href='#about-me'>Sobre mim</a>
          </li>
          <li className='transition duration-300 hover:drop-shadow-md hover:text-white'>
            <a href='#about-me'>Tecnologias</a>
          </li>
          <li className='transition duration-300 hover:drop-shadow-md hover:text-white'>
            <a href='#about-me'>Portfólio</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
