const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;
const living = img('photo-1600210492486-724fe5c67fb0');
const bedroom = img('photo-1611892440504-42a792e24d32');
const samples = [
 ['palm-house','Palm House','short','Ocho Rios',3,3,6,'photo-1613490493576-7fde63acd811','A sun-filled retreat with open living spaces, a private pool, and room to slow down. Spend the morning outside and the evening gathered around the table.',['Private pool','Outdoor dining','Full kitchen','Wi-Fi','Air conditioning']],
 ['the-ridge','The Ridge Residence','long','Kingston',3,2,4,'photo-1600596542815-ffad4c1539a9','An inviting contemporary home with generous living areas and a quiet outdoor corner. A comfortable setting for everyday routines and new beginnings.',['Private garden','Parking','Laundry area','Unfurnished','Covered patio']],
 ['azure-cove','Azure Cove','short','Montego Bay',2,2,4,'photo-1613977257363-707ba9348227','An easygoing escape for slow mornings and time together. Light interiors open onto outdoor spaces designed for relaxed days.',['Shared pool','Furnished','Full kitchen','Wi-Fi','Outdoor seating']],
 ['garden-court','Garden Court','long','Kingston',2,2,3,'photo-1600607687939-ce8a6c25118c','A bright apartment with a practical layout and room to settle in. Natural textures and simple spaces set the scene for a home of your own.',['Balcony','Parking','Laundry connections','Unfurnished','Built-in storage']],
 ['sea-glass','Sea Glass Villa','short','Ocho Rios',4,4,8,'photo-1600607687920-4e2a09cf159d','A spacious villa concept for shared holidays, leisurely dinners, and a change of pace. Gather in the open living room or find a quiet spot to read.',['Private terrace','Furnished','Full kitchen','Wi-Fi','Air conditioning']],
 ['cedar-house','Cedar House','long','Montego Bay',3,2,5,'photo-1600047509807-ba8f99d2cdde','An airy family home concept with flexible spaces and a sheltered terrace. A place to bring your own furniture, habits, and sense of home.',['Private garden','Covered terrace','Parking','Unfurnished','Laundry area']]
];
const fs = await import('node:fs/promises');
const { fileURLToPath } = await import('node:url');
const root = fileURLToPath(new URL('.', import.meta.url));
const ids=[];
for (const [id,name,type,location,beds,baths,guests,photo,description,amenities] of samples) {
 await fs.mkdir(`${root}/properties/${id}/images`,{recursive:true});
 const item={id,name,type,location,address:`Sample address — ${location}, Jamaica (exact location to be supplied)`,beds,baths,guests,description,amenities,images:[{src:img(photo),alt:`Illustrative ${name} property photograph`},{src:living,alt:'Illustrative living room; not the actual property'},{src:bedroom,alt:'Illustrative bedroom; not the actual property'}],sample:true};
 await fs.writeFile(`${root}/properties/${id}/property.json`,JSON.stringify(item,null,2));
 await fs.writeFile(`${root}/properties/${id}/images/.gitkeep`,'');ids.push(id);
}
await fs.writeFile(`${root}/properties/index.json`,JSON.stringify(ids,null,2));


