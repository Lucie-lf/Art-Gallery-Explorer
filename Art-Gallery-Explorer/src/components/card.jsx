import '../index.css';
import '../assets/pic-test.jpg';

function Card() {
    return (
        <div class="w-content gap-auto hover:bg-gray-100 rounded p-4 shadow-lg">
            <div class="w-full h-auto">
            <img src='../assets/pic-test.jpg' class="" alt="Art piece" />
            </div>
            <div class="flex flex-col text-start ">
                <h2 class="text-xl font-bold">Title of the art thing</h2>
                <h4 class="text-xl">Artist name - date</h4>
                <p>This is a description of an art piece.</p>
            </div>
        </div>
    );
}

export default Card;