import useGlobalReducer from "../hooks/useGlobalReducer";

const ReadingListButton = ({ id }) => {
    const [store, dispatch] = useGlobalReducer();

    const inReadingList = () => store.reading_list.find(item => [
        item.id == id,
        item.type ==="book",
    ].every(x => x));

    return <button
        onClick={() => dispatch({
            type: "reading_list",
            item: {
                type: "book",
                id: parseInt(id),
            }
        })}
        className={inReadingList() ? "btn btn-danger" : "btn btn-primary"}
    > 
        {
            inReadingList() ?
            <i class="fa-solid fa-xmark"></i> :
            <i class="fa-solid fa-plus"></i>
        }
    </button>
}

export default ReadingListButton;