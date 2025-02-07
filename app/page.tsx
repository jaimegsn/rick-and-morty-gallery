import CharacterList from "./components/CharacterList/CharacterList";
import Favoritos from "./components/Favoritos/Favoritos";

export default function Home() {
  return (
    <div>
      <Favoritos />
      <CharacterList />
    </div>
  );
}
