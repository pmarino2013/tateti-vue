<script setup>
import { onMounted, ref, watch } from "vue";
import Swal from "sweetalert2";
const posiciones = ref([]);
const winner = ref(false);
const empate = ref(false);
const loser = ref(false);

onMounted(() => {
  InicializarJuego();
});
watch(winner, (newWinner) => {
  if (newWinner) {
    setTimeout(() => {
      Swal.fire({
        title: "GANASTE!!",
        icon: "success",
        background: "#1A1A1A",
        color: "#42D392",
        confirmButtonColor: "#42D392",
        allowOutsideClick: false,
        confirmButtonText: "Cerrar",
      }).then((result) => {
        if (result.isConfirmed) {
          InicializarJuego();
          winner.value = false;
        }
      });
    }, 500);
  }
});

watch(empate, (newEmpate) => {
  if (newEmpate) {
    setTimeout(() => {
      Swal.fire({
        title: "EMPATE",
        icon: "warning",
        allowOutsideClick: false,
        background: "#1A1A1A",
        color: "#FFC107",
        confirmButtonColor: "#FFC107",
        confirmButtonText: "Cerrar",
      }).then((result) => {
        if (result.isConfirmed) {
          InicializarJuego();
          empate.value = false;
        }
      });
    }, 500);
  }
});

watch(loser, (newLoser) => {
  if (newLoser) {
    setTimeout(() => {
      Swal.fire({
        title: "PERDISTE!",
        icon: "error",
        allowOutsideClick: false,
        confirmButtonText: "Cerrar",
        background: "#1A1A1A",
        color: "#DC3545",
        confirmButtonColor: "#DC3545",
      }).then((result) => {
        if (result.isConfirmed) {
          InicializarJuego();
          loser.value = false;
        }
      });
    }, 500);
  }
});

const InicializarJuego = () => {
  posiciones.value = [
    { posicion: 1, done: "", jugador: "", completo: false },
    { posicion: 2, done: "", jugador: "", completo: false },
    { posicion: 3, done: "", jugador: "", completo: false },
    { posicion: 4, done: "", jugador: "", completo: false },
    { posicion: 5, done: "", jugador: "", completo: false },
    { posicion: 6, done: "", jugador: "", completo: false },
    { posicion: 7, done: "", jugador: "", completo: false },
    { posicion: 8, done: "", jugador: "", completo: false },
    { posicion: 9, done: "", jugador: "", completo: false },
  ];
};

const marcarCasillero = (id) => {
  if (!posiciones.value[id].completo) {
    if (!winner.value) {
      posiciones.value[id].done = "X";
      posiciones.value[id].jugador = "player";
      posiciones.value[id].completo = true;

      ganar();
    }
  }
};

const ganar = () => {
  switch (true) {
    case posiciones.value[0].done == "X" &&
      posiciones.value[1].done == "X" &&
      posiciones.value[2].done == "X":
      winner.value = true;
      break;
    case posiciones.value[3].done == "X" &&
      posiciones.value[4].done == "X" &&
      posiciones.value[5].done == "X":
      winner.value = true;
      break;
    case posiciones.value[6].done == "X" &&
      posiciones.value[7].done == "X" &&
      posiciones.value[8].done == "X":
      winner.value = true;
      break;
    case posiciones.value[0].done == "X" &&
      posiciones.value[3].done == "X" &&
      posiciones.value[6].done == "X":
      winner.value = true;
      break;
    case posiciones.value[1].done == "X" &&
      posiciones.value[4].done == "X" &&
      posiciones.value[7].done == "X":
      winner.value = true;
      break;
    case posiciones.value[2].done == "X" &&
      posiciones.value[5].done == "X" &&
      posiciones.value[8].done == "X":
      winner.value = true;
      break;
    case posiciones.value[0].done == "X" &&
      posiciones.value[4].done == "X" &&
      posiciones.value[8].done == "X":
      winner.value = true;
      break;
    case posiciones.value[2].done == "X" &&
      posiciones.value[4].done == "X" &&
      posiciones.value[6].done == "X":
      winner.value = true;
      break;
    default:
      bot();
      break;
  }
};

const perder = () => {
  switch (true) {
    case posiciones.value[0].done == "O" &&
      posiciones.value[1].done == "O" &&
      posiciones.value[2].done == "O":
      loser.value = true;
      break;
    case posiciones.value[3].done == "O" &&
      posiciones.value[4].done == "O" &&
      posiciones.value[5].done == "O":
      loser.value = true;
      break;
    case posiciones.value[6].done == "O" &&
      posiciones.value[7].done == "O" &&
      posiciones.value[8].done == "O":
      loser.value = true;
      break;
    case posiciones.value[0].done == "O" &&
      posiciones.value[3].done == "O" &&
      posiciones.value[6].done == "O":
      loser.value = true;
      break;
    case posiciones.value[1].done == "O" &&
      posiciones.value[4].done == "O" &&
      posiciones.value[7].done == "O":
      loser.value = true;
      break;
    case posiciones.value[2].done == "O" &&
      posiciones.value[5].done == "O" &&
      posiciones.value[8].done == "O":
      loser.value = true;
      break;
    case posiciones.value[0].done == "O" &&
      posiciones.value[4].done == "O" &&
      posiciones.value[8].done == "O":
      loser.value = true;
      break;
    case posiciones.value[2].done == "O" &&
      posiciones.value[4].done == "O" &&
      posiciones.value[6].done == "O":
      loser.value = true;
      break;
  }
};

const bot = () => {
  let disponibles = posiciones.value.filter((pos) => pos.completo == false);
  if (disponibles.length > 0) {
    let numeroRandom = Math.floor(Math.random() * 9);

    if (!posiciones.value[numeroRandom].completo) {
      posiciones.value[numeroRandom].done = "O";
      posiciones.value[numeroRandom].jugador = "bot";
      posiciones.value[numeroRandom].completo = true;
      perder();
    } else {
      bot();
    }
  } else {
    empate.value = true;
  }
};
</script>
<template>
  <div class="container">
    <div class="row pb-3">
      <div v-for="(posicion, index) in posiciones" class="col-4">
        <div
          class="card d-flex justify-content-center align-items-center my-2 text-white"
          :class="
            posicion.done == 'X'
              ? 'bg-success'
              : posicion.done == 'O' && 'bg-danger'
          "
          @click="marcarCasillero(index)"
        >
          <Transition>
            <div v-if="posicion.done == 'X' && posicion.jugador == 'player'">
              <span class="simbolo">X</span>
            </div>
            <div v-else-if="posicion.done == 'O' && posicion.jugador == 'bot'">
              <span class="simbolo">O</span>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style scope>
.card {
  height: 100px;
}
.simbolo {
  font-size: 100px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .card {
    height: 200px;
  }
}
</style>
