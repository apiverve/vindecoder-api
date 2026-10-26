from setuptools import setup, find_packages

setup(
    name='apiverve_vindecoder',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='VIN Decoder turns a 17-character Vehicle Identification Number into the vehicle it identifies. Returns make, model, year, trim, body class and manufacturer, plus engine specifications, plant of manufacture, and the safety equipment fitted to that specific build. Optionally adds every safety recall issued for that vehicle and its NHTSA 5-star crash-test rating.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/vindecoder?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
