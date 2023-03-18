const app = Vue.createApp({

    data: function() {
        return {
          name: "John Doe",
          email: {
            value: "jo@hnd.oe",
            valid: true
          },
          features: ["Reactivity", "Encapsulation", "Data Binding"],
          selection: {
            member: "0",
            framework: "vue",
            features: []
          },
          message: {
            text: `I need a website`,
            maxlength: 255
          },
          submitted: false
        };
      },
      methods: {
        // submit form handler
        submit: function() {
          this.submitted = true;
        },
        // validate by type and value
        validate: function(type, value) {
          if (type === "email") {
            this.email.valid = this.isEmail(value) ? true : false;
          }
        },
        // check for valid email adress
        isEmail: function(value) {
          return emailRegExp.test(value);
        },
        // check or uncheck all
        checkAll: function(event) {
          this.selection.features = event.target.checked ? this.features : [];
        }
      },
      watch: {
        // watching nested property
        "email.value": function(value) {
          this.validate("email", value);
        }
      }

    });


app.mount('#app')