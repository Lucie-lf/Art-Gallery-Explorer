function Header() {
  return (
    <header class="flex flex-row content-between bg-gray-800 text-white gap-2 p-4">
      <h1 class="text-3xl font-bold">Art Gallery Explorer</h1>
      <input type="text" placeholder="Search for art pieces..." class="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Favorite pieces
        </button>
    </header>
  );
}

export default Header;