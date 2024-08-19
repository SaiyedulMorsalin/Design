const loadServices = () => {
    fetch("https://testing-8az5.onrender.com/services/")
        .then(res => res.json())
        .then(services => {
            console.log(services);
            services.forEach(service => {
                const parent = document.getElementById("services-card");
                const li = document.createElement("li");
                li.innerHTML = `
                    <div class="card shadow service-card">
                        <div class="ratio ratio-16x9">
                            <img src="${service.image}" class="card-img-top" loading="lazy" alt="...">
                        </div>
                        <div class="card-body p-3 p-xl-5">
                            <h3 class="card-title h5">${service.name}</h3>
                            <p class="card-text">${service.description.slice(0, 150)}</p>
                            <div><a href="#" class="btn btn-primary">Details <i class="fa-solid fa-arrow-right fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
            `;

                parent.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

loadServices();
