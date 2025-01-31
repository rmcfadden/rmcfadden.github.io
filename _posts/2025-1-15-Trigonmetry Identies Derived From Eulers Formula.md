---
layout: post
author: ryan
---

Euler's formula:

$$e^{iΘ} = cosΘ + isinΘ$$

is often considered the most beautiful formula in mathemetics but it's also very useful at deriving trigommetry identities. This makes sense considering that Euler's Formula lives in the conmplex plane, where calculating rotations are as easy as multiplication, and the fact that many trigonmentric identies involved adding angles, which are effectively rotations.

```
ASFDADSFASDFASASDF
```

$$e^{i\alpha} * e^{i\beta} = ( cos(\alpha) + isin(\alpha) ) * ( cos(\beta) + isin(\beta) )$$

FOIL this out:<br>

> $$cos(\alpha) cos(\beta)) + (cos(\alpha)  isin(\beta)) + (isin(\alpha) cos(\beta) + (isin(\alpha) * isin(\beta) $$

Rearrange and place the real part on the left and the imaginary part on the right:

> $$cos(\alpha) * cos(\beta) - sin(\alpha)*sin(\beta) + i (sin(\alpha) cos(\beta)  + cos(\alpha) sin(\beta) ) $$

If $$ \alpha = \beta $$, then multiplying Euler's formula becomes:

$$e^{iΘ} * e^{iΘ} = ( cos(Θ) + isin(Θ) ) * ( cos(Θ) + isin(Θ) )$$

FOIL this out again:

> $$cos(Θ)^2 + (cos(Θ) * isin(Θ)) + (isin(Θ)  * ( cos(Θ)) + -sin(Θ)^2$$

Rearrange and place the real part on the left and the imaginary part on the right:

$$cos(Θ)^2 - sin(Θ)^2  +  i(2sin(Θ)cos(Θ)) $$

### Trigonmetry Identities

 <div class="flex flex-row w-full">
    <div class="flex flex-1 flex-col items-center bg-red-200">
        Sum-Difference Identities

        $$sin(\alpha±\beta) = sin(\alpha)cos(\beta) ± sin(\beta)cos(\alpha)$$
        $$cos(\alpha∓\beta) = cos(\alpha)cos(\beta) ∓ sin(\alpha)sin(\beta)$$

    </div>
    <div class="flex flex-1 flex-col justify-items-center items-center bg-red-300">

        Double Angle Identities

        $$sin(2Θ) = 2sin(Θ)cos(Θ) $$
        $$cos(2Θ) = cos(Θ)^2 - sin(Θ)^2$$
    </div>

</div>
