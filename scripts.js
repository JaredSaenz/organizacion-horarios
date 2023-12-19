document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    document.getElementById('sidebarCollapse').addEventListener('click', function () {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });
});
