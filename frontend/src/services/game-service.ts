export default class GameService {
 
    static searchGame(term: string): Promise<String[]> {
      return fetch(`https://api.rawg.io/api/games?key=cef989088c794acf934ff517ffec5d29&search=${term}`)
        .then(response => response.json())
        .then(data => data.results);
    }
   
    // static getGame(id: number): Promise<Pokemon|null> {
    //   return fetch(`http://localhost:3001/pokemons/${id}`)
    //     .then(response => response.json())
    //     .then(data => this.isEmpty(data) ? null : data);
    // }
   
    // static isEmpty(data: Object): boolean {
    //   return Object.keys(data).length === 0;
    // }
  }

 