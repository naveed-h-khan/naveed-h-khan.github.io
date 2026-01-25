$(function () {
  const posts = [
    {
      title: "How I Solved a Production Deadlock",
      file: "001.html",
      date: "25 Jan 2026"
    },
    {
      title: "Why Lazy<T> Saved Our Connection Pool",
      file: "002.html",
      date: "28 Jan 2026"
    }
  ];

  posts.forEach(p => {
    $('#blog-list').append(`
      <li class="list-group-item">
        <a href="post.html?file=${p.file}">
          <strong>${p.title}</strong>
        </a>
        <span class="text-muted pull-right">${p.date}</span>
      </li>
    `);
  });
});
