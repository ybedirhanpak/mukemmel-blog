module.exports = (date) => {
    let options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: "2-digit", minute: "2-digit" };

    return date.toLocaleDateString("tr-TR", options);
}