const queries = {
    registerNewUser: `
    INSERT INTO users (
        email,
        password,
        first_name,
        last_name
    ) VALUES ($1,$2,$3,$4)
    RETURNING *
     `,
    loginUser: `
    SELECT 
    email,
    password,
    first_name,
    last_name,
    created_at,
    updated_at
    FROM users
    WHERE email=$1 AND password=$2
    `,
    reportIncident: `
    INSERT INTO incidents (
        client_id,
        incident_desc,
        city,
        country,
        weather_report
    ) VALUES ($1,$2,$3,$4,$5)
    RETURNING *
    `,
    getIncidents: `
    SELECT * FROM incidents`,
    getUserIncident: `
    SELECT * FROM incidents
    WHERE client_id=$1`
}

module.exports = queries