document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    function toggleDetails(id) {
        const element = document.getElementById(id);
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('bg-gray-100');
        body.classList.toggle('bg-gray-900');
        body.classList.toggle('text-gray-800');
        body.classList.toggle('text-gray-200');

        // Change the header background color
        const header = document.querySelector('header');
        header.classList.toggle('bg-blue-600');
        header.classList.toggle('bg-gray-800');

        // Toggle all section backgrounds
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.toggle('bg-white');
            section.classList.toggle('bg-gray-800');
        });

        // Update button text based on mode
        darkModeToggle.textContent = body.classList.contains('bg-gray-900') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });
});

