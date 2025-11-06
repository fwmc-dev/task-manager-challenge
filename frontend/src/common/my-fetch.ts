/**
 * Función para realizar peticiones fetch a la API.
 * @param url La URL del endpoint.
 * @param options Las opciones de fetch (method, headers, body, etc.).
 * @returns Los datos parseados como JSON.
 */
export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Error desconocido' }));
      console.error(`Error haciendo peticion a ${url}:`, response.status, errorData);
      throw new Error(`Error de peticion HTTP! status: ${response.status} - ${errorData.message}`);
    }

    const data: T = await response.json();
    return data;

  } catch (error) {
    console.error("Error en la peticion a la API:", error);
    throw error;
  }
}
