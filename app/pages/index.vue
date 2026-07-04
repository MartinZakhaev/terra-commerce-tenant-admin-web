<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <main class="page">
    <section class="card">
      <p class="eyebrow">Terra Commerce</p>
      <h1>Tenant Admin</h1>
      <p>Catalog, orders, inventory, warehouse, shipment, reporting, and tenant settings.</p>
      <dl>
        <div>
          <dt>Gateway</dt>
          <dd>{{ config.public.apiBase }}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>Scaffold ready</dd>
        </div>
      </dl>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.card {
  width: min(42rem, 100%);
  padding: 2rem;
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 1rem;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 8%);
}

.eyebrow {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin-bottom: 0.5rem;
  font-size: clamp(2rem, 8vw, 4rem);
}

dl {
  display: grid;
  gap: 0.75rem;
  margin-top: 2rem;
}

dl div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e4e4e7;
}

dt {
  font-weight: 600;
}

dd {
  margin: 0;
  overflow-wrap: anywhere;
}
</style>
