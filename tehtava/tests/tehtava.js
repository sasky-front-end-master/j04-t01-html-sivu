
import { Selector } from 'testcafe';

fixture `HTML-sivun toteuttaminen`
    .page `../tehtava.html`;

test('Sivulla on title', async t => {
    const title = Selector("title");
    
    await t
        .expect(title.textContent).match(/.+/);
});

test('Sivulla on päätason otsikko', async t => {
   const paaotsikko = Selector("h1").exists;

   await t
     .expect(paaotsikko).ok();
});

test('Sivulla on vähintään kaksi h2-tason otsikkoa', async t => {
    const alaotsikot = Selector("h2").count;
 
    await t
      .expect(alaotsikot).gte(2);
 });

test('Sivulla on vähintään neljä tekstikappaletta', async t => {
    const kappaleet = Selector("p").count;
 
    await t
      .expect(kappaleet).gte(4);
});

test('Sivulla on vähintään kolmen kohdan lista', async t => {
    const alkiot = Selector("ul li").count;
 
    await t
      .expect(alkiot).gte(3);
});

test('Sivulla on vähintään yksi kuva', async t => {
    const kuvat = Selector("img").count;
 
    await t
      .expect(kuvat).gte(1);
});
