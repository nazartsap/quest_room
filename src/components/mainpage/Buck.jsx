import React, { useState } from 'react';

export function Buck() {
  const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('')

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = {
        name: name,
        phone: phone,
        date: date
      };

      try {
        const response = await fetch('http://localhost:3001/send-telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          console.log('Message sent successfully');
        } else {
          console.error('Error sending message');
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className='telegram_send'>
        <h2 className='text_header'>ЗАБРОНИРУЙ</h2>
        <div>
        <form className='form_buck' onSubmit={handleSubmit}>
            <div className='text_form'>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                placeholder='Имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='text_form'>
              <label htmlFor="phone"></label>
              <input
                type="tel"
                id="phone"
                placeholder='Телефон'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className='text_form'>
              <label htmlFor="date"></label>
              <input
                type="date"
                id="date"
                placeholder='Дата'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          <button type="submit">Бронировать</button>
        </form>
        </div>
      </div>
    );
  };

  return <Form />;
}
