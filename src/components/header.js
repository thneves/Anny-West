import Image from 'next/image';
import heroImage from 'public/static/images/header-main.jpeg'

const Header = () => {
  return (
    <header className="flex flex-row">
      <div className="">
        <h1>Anny West</h1>
        <h2>Modelo</h2>
      </div>
      <div className="">
        <Image src={heroImage} width={500} height={500} />
      </div>
    </header>
  );
}

export default Header;
