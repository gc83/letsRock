members = [
  {
    fname: "John",
    lname: "Lennon",
    instrument: "Acoustic Guitar",
  },
  {
    fname: "George",
    lname: "Harrison",
    instrument: "Electric Guitar",
  },
];

const handlingForms = {
  data() {
    return {
      title: "Lets Rock 🤘",
      members: members,
      newMember: {},
    };
  },
  methods: {
    addMember: function () {
      if (
        this.newMember.fname &&
        this.newMember.lname &&
        this.newMember.instrument
      ) {
        this.members.push(this.newMember);
        this.newMember = {};
      } else {
        alert("Tous les champs doivent être remplis");
      }
    },
  },
};

Vue.createApp(handlingForms).mount("#app");
