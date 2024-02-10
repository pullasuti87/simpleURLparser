function parse(url) {
  const proSign = "://";
  const querySign = "?";
  const fragSign = "#";

  // protocol
  const proIndex = url.indexOf(proSign);
  const protocol = url.slice(0, proIndex).trim();

  if (String(protocol) === "http" || String(protocol) === "https") {
  } else {
    console.log("invalid protocol!");
    return;
  }

  const removePro = url.slice(proIndex + proSign.length);
  console.log(removePro);

  // fragment
  const fragIndex = removePro.indexOf(fragSign);
  const fragment = removePro.slice(fragIndex).trim();

  const removeFrag = removePro.slice(0, fragIndex);
  // console.log(removeFrag);

  // query
  //    const queryIndex = url.indexOf(querySign);
  //    const queryParams = url.slice(queryIndex + 1);

  const parsedURL = {
    protocol,
    fragment,
  };

  return parsedURL;
}

const s = process.argv[2];

if (!s) {
  console.error("problem in process!");
  process.exit(1);
}

const parsedURL = parse(s);
console.log(parsedURL);
