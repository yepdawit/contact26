import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );

                const result = await response.json();
                setSelectedContact(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSelectedContact();
    }, [selectedContactId]);

    console.log("Selected Contact", selectedContact);

    if (!selectedContact) {
        return <div>Loading...</div>;
    }  

    return (
        <div>
            <h2>Selected Contact</h2>
            <button onClick={() => setSelectedContactId(null)}>Back</button>
            <div>
                <div>{selectedContact.name}</div>

                <div>{selectedContact.email}</div>

                <div>{selectedContact.phone}</div>

            </div>


            );
        }
        