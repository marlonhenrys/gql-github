module.exports = old => {
    const now = new Date();
    const past = new Date(old);
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = parseInt(diff / (1000 * 60 * 60 * 24));

    return days
}