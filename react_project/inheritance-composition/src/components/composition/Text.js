export default function Text({ addEmoji, addBracket }) {
    let text = 'I am JavaScript Language';

    if (addEmoji) {
        text = addEmoji(text, 'ღ');
    }

    if (addBracket) {
        text = addBracket(text);
    }

    return (
        <>
            {
                text
            }
        </>
    )
}