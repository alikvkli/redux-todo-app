import React from "react";

const Footer = () => {
    return (
        <footer className="info">
            <p>Todo'yu düzenlemek için tıklayınız.</p>
            <p><a href="https://github.com/ali4520/redux-todo-app">Kaynak Kod</a></p>
        </footer>
    );
}

export default React.memo(Footer);