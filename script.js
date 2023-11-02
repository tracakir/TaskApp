addEventListener("DOMContentLoaded", (event) => {
  const dataTasks = [
    {
      id: 2545000624,
      title: "Title",
      desc: "Description",
      created: "1.11.2023 18:00",
      categories: [1, 2],
      users: [1],
    },
    {
      id: 4081082784,
      title: "Title",
      desc: "Description",
      created: "1.11.2023 18:00",
      categories: [1, 3],
      users: [1, 2],
    },
    {
      id: 1259856857,
      title: "Title",
      desc: "Description",
      created: "1.11.2023 18:00",
      categories: [3],
      users: [2],
    },
    {
      id: 3857840975,
      title: "Title",
      desc: "Description",
      created: "1.11.2023 18:00",
      categories: [1],
      users: [3],
    },
    {
      id: 1127604095,
      title: "Title",
      desc: "Description",
      created: "1.11.2023 18:00",
      categories: [1, 2, 3],
      users: [1, 2, 3],
    },
  ];
  const dataCategories = [
    {
      id: 1,
      label: "Frontend",
    },
    {
      id: 2,
      label: "UI",
    },
    {
      id: 3,
      label: "Javascript",
    },
  ];
  const dataUsers = [
    {
      id: 1,
      name: "John",
      surname: "Doe",
    },
    {
      id: 2,
      name: "Jack",
      surname: "Doe",
    },
    {
      id: 3,
      name: "Marry",
      surname: "Doe",
    },
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formDesc = document.getElementById("desc").value;
    const formTitle = document.getElementById("title").value;
    const formCategories = document.getElementById("categories").value;
    const formUsers = document.getElementById("users").value;
    let findCategories = "null";
    dataCategories.forEach((element) => {
      if (element.id === parseInt(form.categories)) {
        findCategories = element.label;
      }
    });
    const newTask = {
      title: formTitle,
      desc: formDesc,
      categories: formCategories,
      users: formUsers,
    };
    function myFunction() {
      var options = document.getElementById("selectOptions").options;
      const array = [];
      var options = document.getElementById("selectOptions").selectedOptions;
      for (var n = 0; n < options.length; n++) {
        array.push(options[n].value);
      }
      console.log(array);
    }
    console.log(newTask);
  });
});
